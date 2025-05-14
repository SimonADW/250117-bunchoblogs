import style from "./SocialModal.module.css";
import { SocialIcon } from "react-social-icons";
import FocusLock from "react-focus-lock";
import useKeydown from "../../hooks/useKeydown.ts";
import { X as Close } from "react-feather";
import { RemoveScroll } from "react-remove-scroll";

type SocialModalProps = {
	handleDismiss: () => void;
};

const SocialModal = ({ handleDismiss }: SocialModalProps) => {
	// Clear all toasts on Escape press:
	useKeydown("Escape", handleDismiss);

	const handleClickOutside = () => {
		handleDismiss();
	};

	return (
		
		<RemoveScroll>
			<FocusLock returnFocus >
				<div
					className={style.socialModalBackdrop}
					onClick={handleClickOutside}
				>
					<div
						className={style.socialModal}
						onClick={(e) => e.stopPropagation()}
					>
						<button
							onClick={() => handleDismiss()}
							className={style.socialModal__closeButton}
						>
							<Close size="32" />
						</button>
						Thanks for sharing on your SoMe 💜
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
		</RemoveScroll>
	);
};

export default SocialModal;
