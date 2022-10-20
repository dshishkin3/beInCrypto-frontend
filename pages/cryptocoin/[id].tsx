import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";

import axios from "axios";

import { ICryptocurrency } from "../../app/components/shared/interfaces/cryptocurrency.types";
import { getCoinById } from "../../app/components/shared/axios/options";
import Wrapper from "../../app/components/ui/wrapper/Wrapper";
import CryptoInfo from "../../app/components/screens/cryptoInfo/CryptoInfo";

interface CoinProps {
	coin: ICryptocurrency
}

const Coin: NextPage<CoinProps> = ({ coin }) => {
	const links = coin.links.filter((link: any, index: any) => index < 3);
	return (
		<>
			<Head>
				<title>Crypto</title>
			</Head>
			<Wrapper>
				<CryptoInfo
					coin={coin}
					links={links}

				/>
			</Wrapper>
		</>
	);
};

export default Coin;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const response = await axios.request(getCoinById.fetchCoin(params!.id));
	if (!response.data) {
		return {
			notFound: true,
		};
	}
	return {
		props: { coin: response.data.data.coin }
	};

};