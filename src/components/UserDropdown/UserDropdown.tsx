
import style from "./UserDropdown.module.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { User } from "react-feather";
import useToggle from "../../hooks/useToggle";
import useKeydown from "../../hooks/useKeydown";

const UserDropdown = () => {
	const [dropDownVisible, toggleDropdown] = useToggle(false);
	const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

	useKeydown("Escape", handleDismiss);

	function handleDismiss() {
		toggleDropdown(false);
	};

	// Capitalize first letter of nickname
	const capitalize = (str: string | undefined) => {
		if (!str) return;
		return str.charAt(0).toUpperCase() + str.slice(1);
	};
	
	return (
		<div className={style.userContainer}>
			<button className={style.userButton} onClick={()=>toggleDropdown()}>
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
							<div className={style.dropdownNickname}>{capitalize(user?.nickname)}</div>							
							<hr />
							<Link className={style.dropDownLink} onClick={()=>toggleDropdown()} to={"/blogs/1"}>New Blogpost</Link>
							<Link className={style.dropDownLink} onClick={()=>toggleDropdown()} to={"/blogs/1"}>My posts</Link>

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
