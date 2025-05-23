import React from "react";
import style from "./UserDropdown.module.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { User } from "react-feather";
import useKeydown from "../../hooks/useKeydown";
import useClickOutside from "../../hooks/useClickOutside";

const UserDropdown = () => {
	const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
	const [dropDownVisible, setDropdownVisible] = React.useState(false);
	const dropDownRef = React.useRef<HTMLDivElement>(null);

	// Close dropdown when clicking outside or pressing escape
	const handleDismiss = React.useCallback(() => {
		setDropdownVisible(false);
	}, []);

	useKeydown("Escape", handleDismiss);
	useClickOutside(dropDownRef, handleDismiss, dropDownVisible);

	// Capitalize first letter of nickname
	const capitalize = (str: string | undefined) => {
		if (!str) return;
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	return (
		<div className={style.userContainer} ref={dropDownRef}>
			<button
				className={style.userButton}
				onClick={() => setDropdownVisible(prev => !prev)}
			>
				{/* Render button content based on auth status */}
				{isAuthenticated ? (
					<img src={user?.picture} alt="User image or avatar" />
				) : (
					<User />
				)}
			</button>

			{/* Show dropdown menu if dropDownVisible (toggle)*/}
			{dropDownVisible && (
				<>
					{/* Show "logged in-dropdown" if authenticated */}
					{isAuthenticated ? (
						<div className={style.userDropdown}>
							<div className={style.userInfo}>
								<img
									src={user?.picture}
									className={style.userButton}
									alt="User image or avatar"
								/>
								<div className={style.dropdownNickname}>
									{capitalize(user?.nickname)}
								</div>
							</div>
							<hr />
							<Link
								className={style.dropDownLink}
								onClick={() => setDropdownVisible(false)}
								to={"/add-blog"}
							>
								New Blogpost
							</Link>
							<Link
								className={style.dropDownLink}
								onClick={() => setDropdownVisible(false)}
								to={"/blogs/my-posts"}
							>
								My posts
							</Link>

							<button onClick={() => logout()}>Sign Out</button>
						</div>
					) : (
						<div className={style.userDropdown}>
							<button onClick={() => loginWithRedirect()}>
								Sign In
							</button>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default UserDropdown;
