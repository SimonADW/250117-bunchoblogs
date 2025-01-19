import React from "react";
import { Blocks } from "react-loader-spinner";
import style from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
	return (
		<div className={style.spinnerWrapper}>
			<Blocks
				height="80"
				width="80"
				color="#4fa94d"
				ariaLabel="blocks-loading"
				wrapperStyle={{}}
				wrapperClass="blocks-wrapper"
				visible={true}
			/>
		</div>
	);
};

export default LoadingSpinner;
