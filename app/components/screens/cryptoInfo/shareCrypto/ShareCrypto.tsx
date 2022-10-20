import { NextPage } from "next";
import { HiCheckCircle } from "react-icons/hi";

import styles from "./ShareCrypto.module.scss";

interface ShareCryptoProps {
	isActive: boolean;
}

const ShareCrypto: NextPage<ShareCryptoProps> = ({ isActive }) => {
	return (
		<div className={styles.share + " " + (isActive ? styles.active : styles.hidden)}>
			<HiCheckCircle size={17} color="green" />
			<span>Copied!</span>
		</div >
	);
}

export default ShareCrypto;