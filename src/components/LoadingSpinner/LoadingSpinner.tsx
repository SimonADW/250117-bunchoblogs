import { Bars } from "react-loader-spinner";
import style from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
	return (
		<div className={style.spinnerWrapper}>
			<Bars
				height="80"
				width="80"
				color="#d000ff"
				ariaLabel="blocks-loading"
				wrapperStyle={{}}
				wrapperClass="blocks-wrapper"
				visible={true}
			/>
		</div>
	);
};

export default LoadingSpinner;
