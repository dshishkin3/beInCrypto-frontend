import { useState, useEffect, } from "react";

import { NextPage } from "next";
import Image from "next/image";

import { BsStar } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { RiShareCircleLine } from "react-icons/ri";

import axios from "axios";

import { getCoinPriceHistory } from "../../shared/axios/options";

import MyTitle from "../../ui/title/Title";
import Btn from "../../ui/btn.tsx/Btn";

import { ICoinHistory, ICryptocurrency, ILinks } from "../../shared/interfaces/cryptocurrency.types";

import Converter from "./converter/Converter";
import MarketCap from "./marketCap/MarketCap";
import LineChart from "./lineChart/LineChart";
import ShareCrypto from "./shareCrypto/ShareCrypto";

import styles from "./CryptoInfo.module.scss";


interface CryptoInfoProps {
	coin: ICryptocurrency;
	links: ILinks[];

}
const CryptoInfo: NextPage<CryptoInfoProps> = ({ coin, links, }) => {

	const coinPrice: string[] = [];
	const coinTimeStamp: string[] = [];
	const [coinHistory, setCoinHistory] = useState<ICoinHistory[]>([]);
	const [coinChange, setCoinChange] = useState<string>("");
	const [changePercent, setChangePercent] = useState<string>();
	const [isActive, setIsActive] = useState<boolean>(false);

	for (let i = 0; i < coinHistory.length; i++) {
		coinPrice.push(coinHistory[i]?.price);
		coinTimeStamp.push(new Date(coinHistory[i].timestamp).toLocaleDateString());
	}
	const price = coin.price.slice(0, 9).split("");
	if (price[1] !== ".") {
		price.splice(2, 0, ",");
	}
	price.splice(2, 0);

	const marketCap = coin.marketCap.slice(0, 5).split("");
	marketCap.splice(3, 0, ".");
	marketCap.splice(6, 0, "B");

	const fullyDilutedMarketCap = coin.fullyDilutedMarketCap.slice(0, 5).split("");
	fullyDilutedMarketCap.splice(3, 0, ".");
	fullyDilutedMarketCap.splice(6, 0, "B");

	const val24 = coin["24hVolume"].slice(0, 4).split("");
	val24.splice(2, 0, ".");
	val24.splice(5, 0, "B");

	const onShareHandler = () => {
		const path: string = window.location.href;
		navigator.clipboard.writeText(path);
		setIsActive(true);
		setTimeout(() => {
			setIsActive(false);
		}, 500);
	};

	const fetchHistoryData = async (time: string = "1h",) => {
		const { data } = await axios.request(getCoinPriceHistory.fetchHistory(time, coin!.uuid));
		setCoinHistory(data?.data?.history);
		setCoinChange(data?.data?.change);
		const sum: string = ((+data?.data?.history[0].price) / 100 * (+data?.data?.change)).toLocaleString().slice(0, 8);
		setChangePercent(sum);
	};

	useEffect(() => {
		fetchHistoryData();
	}, []);

	return (
		<main className={styles.content}>
			<div className={styles.header}>
				<div className={styles.top}>
					<div className={styles.icon}>
						<Image src={coin.iconUrl} alt={coin.name} width="30" height="30" />
					</div>
					<MyTitle >{coin.name}</MyTitle>
					<div className={styles.options}>
						<Btn tag="span" variant="primary" padding="3px 7px" >
							{coin.symbol}
						</Btn>
						<Btn tag="span" variant="secondary" padding="5px 5px" >
							<BsStar size={15} color={"#474D57"} />
						</Btn>
						<Btn onClick={onShareHandler} tag="span" variant="secondary" padding="5px 10.4px" margin="0px 13px 0px 0px">
							<FiShare size={13} className={styles.share} />
							Share
						</Btn>
					</div>
				</div>
				<div className={styles.rank}>
					<Btn tag="span" padding="3px 7px" margin="0px 9px 0px 0px" variant="primary">
						Rank #{coin.rank}
					</Btn>
					<Btn tag="span" padding="3px 7px" variant="primary">
						Coin
					</Btn>
				</div>
				<div className={styles.links}>
					{links.map((link: any) => (
						<Btn tag="a" key={link.name}
							href={link.url}
							padding="7px 7px"
							margin="0px 10px 0px 0px"
							variant="primary" >{link.name} <RiShareCircleLine style={{ marginLeft: "3px" }} /> </Btn>
					))}
				</div>
			</div>
			<div className={styles.body}>
				<LineChart coinPrice={coinPrice} coinTimeStamp={coinTimeStamp}
					fetchHistoryData={fetchHistoryData} coinChange={coinChange} changePercent={changePercent} />
				<MarketCap
					price={price.join("")}
					vol24={val24.join("")}
					fullyDilutedMarketCap={fullyDilutedMarketCap.join("")}
					marketCap={marketCap.join("")}
					change={coin.change}
				/>
				<div className={styles.decript}>
					<MyTitle size={18} tag="h3">
						{coin.symbol} to USD Converter
					</MyTitle>
					<Converter name={coin.name} iconUrl={coin.iconUrl} price={coin.price} symbol={coin.symbol} />
					<MyTitle size={18} tag="h3" >
						What Is {coin.name} ({coin.symbol})?
					</MyTitle>
					<div dangerouslySetInnerHTML={{ __html: coin.description }} >
					</div>
				</div>
			</div>
			<ShareCrypto isActive={isActive} />
		</main>
	);
};

export default CryptoInfo;
