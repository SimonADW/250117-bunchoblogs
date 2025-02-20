import React from "react";
import style from "./Button.module.css";

type ButtonProps = {
	onClick?: () => void;
	href?: string;
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;

// Button that renders anchor if href prop is present, else a button
const Button = ({ children, href, ...delegated }: ButtonProps) => {
	const Tag = href ? "a" : "button";
	return (
		<Tag href={href} className={style.genericButton} {...delegated}>
			{children}
		</Tag>
	);
};

export default Button;
