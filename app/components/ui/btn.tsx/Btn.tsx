import { FC } from "react";

import styles from "./Btn.module.scss";

interface MyBtnProps {
	children?: React.ReactNode;
	onClick?: () => void;
	margin?: string;
	padding?: string;
	variant: "primary" | "secondary";
	type?: "submit" | "reset" | "button" | undefined;
	tag?: "button" | "a" | "span";
	href?: string;

}
const MyBtn: FC<MyBtnProps> = ({ tag, href, variant, children, margin, onClick, type, padding, }) => {
	const Tag = tag || "button";
	return (
		<Tag
			onClick={onClick}
			href={href && href}
			style={{ padding: padding, margin: margin, display: "inline-flex", alignItems: "center", }}
			className={styles[variant]}
		>
			{children}
		</Tag >

	);
};

export default MyBtn;