/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NextPage } from "next";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineController, Tooltip, LineElement, PointElement, LinearScale, Title, CategoryScale, Legend } from "chart.js";

import styles from "./LineChart.module.scss";

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

export const timestamp: string[] = ["1H", "3H", "24H", "7D", "1Y", "3Y", "5Y"];

interface LineChartProps {
	coinTimeStamp: any;
	coinPrice: string[];
	coinChange: string;
	changePercent: string | undefined;
	fetchHistoryData: (time: string) => void;
}

const LineChart: NextPage<LineChartProps> = ({ coinPrice, coinTimeStamp, fetchHistoryData, coinChange, changePercent }) => {
	const [isActive, setIsActive] = useState<string>("1H");

	const options: any = {
		maintainAspectRatio: true,
		responsive: true,
		scales: {
			x: {
				beginAtZero: true
			}
		}

	};

	const data = {
		labels: coinTimeStamp,
		datasets: [
			{
				label: "Price in USD",
				data: coinPrice,
				fill: false,
				borderColor: "red",
				// backgroundColor: "green",
				borderWidth: 3,
			}
		],
	};

	const onClickHandler = (time: string): void => {
		setIsActive(time);
		fetchHistoryData(time.toLocaleLowerCase());
	};

	return (
		<div className={styles.content} >
			<div className={styles.chart_line_header}>
				<div className={styles.price_items}>
					<span className={styles.price}>${coinPrice[0]?.slice(0, 8)}</span>
					<span className={coinChange && coinChange[0] === "-" ? styles.red : styles.change}>
						${changePercent}({coinChange}%)
					</span>
				</div>
				<div className={styles.timestamp}>
					{timestamp.map((time, index) => (
						<button
							key={time}
							className={styles.item + " " + (isActive === time ? styles.active : "")}
							onClick={() => onClickHandler(time)} >{time}</button>
					))
					}
				</div>
			</div>
			<Line data={data} options={options} width={600} />
		</div >
	);
};

export default LineChart;