import logo from "../../assets/logo/bunchoblogs-logo.jpeg";
import style from "./Header.module.css";
import { ChildrenProps } from "../../types/types";
import Button from "../Button/Button";
import GradientHeading from "../Gradient-heading/GradientHeading";
import SocialModal from "../SocialModal/SocialModal";
import useToggle from "../../hooks/useToggle";

// Component renders NavLink children in buttonContainer/navLinks
const Header = ({ children }: ChildrenProps) => {
	const [ modalIsVisible, toggleModal ] = useToggle(false);

	return (
		<header className={style.home__header}>
			<div className={style.logoContainer}>
				<img src={logo} alt="logo" />
				<GradientHeading
					angleDegrees={90}
					color1={"var(--button-color)"}
					color2={"var(--active-color"}
					heading={"h1"}
				>
					Bunch `o Blogs
				</GradientHeading>
			</div>

			<div className={style.buttonContainer}>
				<span className={style.navLinks}>{children}</span>
				<Button onClick={toggleModal}>Share</Button>

				{/* Wrap modal to prevent SocialModal FocusLock to trigger flex gap */}
				<div className={style.socialWrapper}>
					{modalIsVisible && <SocialModal handleDismiss={toggleModal}/>}
				</div>
			</div>
		</header>
	);
};

export default Header;
