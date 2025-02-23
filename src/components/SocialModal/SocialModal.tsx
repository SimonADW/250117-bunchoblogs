import React from "react";
import style from "./SocialModal.module.css";
import { SocialIcon } from "react-social-icons";
import FocusLock from "react-focus-lock";
import useModal from "../../hooks/useModal";


const SocialModal = () => {
	const { handleDismiss } = useModal();

	return (
		<FocusLock returnFocus>
			<div className={style.socialModalWrapper}>
				<div className={style.socialModal}>
					<button onClick={handleDismiss}>
						Close
					</button>
					Share on social media?
					<div className={style.socialIconsContainer}>
						<SocialIcon
							network="facebook"
							href="https://www.facebook.com/"
						/>
						<SocialIcon
							network="twitter"
							href="https://www.twitter.com/"
						/>
						<SocialIcon
							network="instagram"
							href="https://www.instagram.com/"
						/>
					</div>
				</div>
			</div>
		</FocusLock>
	);
};

export default SocialModal;
