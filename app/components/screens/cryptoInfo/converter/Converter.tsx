import { ChangeEvent, useState } from "react";
import { NextPage } from "next";
import Image from "next/image";

import { RiArrowLeftRightFill } from "react-icons/ri";
import { AiFillDollarCircle } from "react-icons/ai";

import { Input } from "../../../ui/input/Input";

import styles from "./Converter.module.scss";

interface ConverterProps {
	price: string;
	iconUrl: string;
	name: string;
	symbol: string;
}

const Converter: NextPage<ConverterProps> = ({ price, name, iconUrl, symbol }) => {
	const [isChenged, setIsChenged] = useState<boolean>(false);
	const [amount1, setAmount1] = useState<number>(+price.slice(0, 9));
	const [amount2, setAmount2] = useState<number>(1);

	const onClickHandle = () => {
		setIsChenged(!isChenged);
	};

	const onchangeAmount1 = (event: ChangeEvent<HTMLInputElement>) => {
		const count: number = +event.target.value;
		if (!isNaN(count)) {
			setAmount2(count);
			const converterCount = +price.slice(0, 9) * count;
			setAmount1(converterCount);
		}


	};
	const onchangeAmount2 = (event: ChangeEvent<HTMLInputElement>) => {
		const count: number = +event.target.value;
		if (!isNaN(count)) {
			const converterCount = count / +price.slice(0, 9);
			setAmount2(converterCount);
			setAmount1(count);
		}


	};
	return (
		<section className={styles.converter}>
			<div className={styles.coin}>
				{!isChenged ?
					<>
						<div className={styles.icon}>
							<Image src={iconUrl} alt={name} width="30" height="30" />
						</div>
						<div className={styles.items}>
							<span className={styles.symbol}>{symbol}</span>
							<span className={styles.name}>{name}</span>
						</div>
						<Input onChange={onchangeAmount1} value={amount2} />
					</>
					:
					<>
						<div className={styles.icon}>
							<AiFillDollarCircle size={32} color="#16C784" />
						</div>
						<div className={styles.items}>
							<div className={styles.symbol}>
								USD
							</div>
							<div className={styles.name}>
								United States Dollar
							</div>
						</div>
						<Input onChange={onchangeAmount2} value={amount1} />
					</>
				}
			</div>


			<div onClick={onClickHandle} className={styles.changeButton}>
				<RiArrowLeftRightFill size={22} color="#A1A7BB" />
			</div>


			<div className={styles.usd}>
				{!isChenged ?
					<>
						<div className={styles.icon}>
							<AiFillDollarCircle size={32} color="#16C784" />
						</div>
						<div className={styles.items}>
							<div className={styles.symbol}>
								USD
							</div>
							<div className={styles.name}>
								United States Dollar
							</div>
						</div>
						<Input onChange={onchangeAmount2} value={amount1} />
					</>
					:
					<>
						<div className={styles.icon}>
							<Image src={iconUrl} alt={name} width="30" height="30" />
						</div>
						<div className={styles.items}>
							<span className={styles.symbol}>{symbol}</span>
							<span className={styles.name}>{name}</span>
						</div>
						< Input onChange={onchangeAmount1} value={amount2} />
					</>}
			</div>
		</section>
	);
};


export default Converter;
