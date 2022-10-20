import { NextPage } from "next";
import { IoMdArrowDropup } from "react-icons/io";

import styles from "./MarketCap.module.scss";

interface MarketCapProps {
	price: string;
	marketCap: string;
	vol24: string;
	fullyDilutedMarketCap: string;
	change: string;
}

const MarketCap: NextPage<MarketCapProps> = ({ price, vol24, marketCap, fullyDilutedMarketCap, change }) => {

	const currencyObj = [
		{ elem: price.slice(0, 9), name: "Price" },
		{ elem: marketCap, name: "Market Cap" },
		{ elem: vol24, name: "val24" },
		{ elem: fullyDilutedMarketCap, name: "fully Diluted Market Cap" }
	];
	return (
		<div className={styles.row}>
			{currencyObj.map((item, index) => (
				<div key={index} className={styles.column}>
					<div className={styles.items}>
						<div className={styles.title}>{item.name}</div>
						<div className={styles.amount}>${item.elem}</div>
						<div className={styles.change}>
							<IoMdArrowDropup
								size={22}
								color={change.slice(0, 1) === "-" ? "#F6465D" : "#0ECB81"}
								style={{
									transform:
										change.slice(0, 1) === "-" ? "rotate(180deg)" : "",
								}}
							/>
							<b>
								{change.slice(0, 1) === "-"
									? change.slice(1, 6)
									: change}
							</b>
						</div>
					</div>
				</div>

			))}
		</div>
	);
};

export default MarketCap;