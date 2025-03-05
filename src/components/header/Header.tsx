import logo from "../../assets/logo/bunchoblogs-logo.jpeg";
import style from "./Header.module.css";
import { ChildrenProps } from "../../types/types";
import Button from "../Button/Button";
import GradientHeading from "../Gradient-heading/GradientHeading";
import SocialModal from "../SocialModal/SocialModal";
import useToggle from "../../hooks/useToggle";
import { useAuth0 } from "@auth0/auth0-react";

// Component renders NavLink children in buttonContainer/navLinks
const Header = ({ children }: ChildrenProps) => {
	const [modalIsVisible, toggleModal] = useToggle(false);
	const { loginWithRedirect, logout, isAuthenticated, isLoading, user } = useAuth0();
	
	
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
				<span className={style.navLinks}>
					{/* Renders NavLink children here */}
					{children}
				</span>

				<Button onClick={toggleModal}>Share</Button>

				{/* Auth conditional render of button here */}
				{isAuthenticated && !isLoading ? (
					<div className={style.profileAndNickContainer}>
						<Button onClick={() => logout()}>Sign Out</Button>
						<p className={style.nickName}>{user?.nickname}</p>	
					</div>

				) : (
					<Button onClick={() => loginWithRedirect()}>Log In</Button>
				)}

				{/* Wrap modal to prevent SocialModal FocusLock to snap left (trigger flex gap) */}
				<div className={style.socialWrapper}>
					{modalIsVisible && (
						<SocialModal handleDismiss={toggleModal} />
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
