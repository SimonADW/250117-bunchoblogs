import logo from '../../assets/logo/bunchoblogs-logo.jpeg';
import style from './Header.module.css';
import { ChildrenProps } from '../../types/types';
import Button from '../button/Button';


const Header = ({children}: ChildrenProps) => {
  return (
	  <header className={style.home__header}>
		<div className={style.logoContainer}>
			<img src={logo} alt="logo" />
			<h1 className={style.heading}>Bunch `o Blogs</h1>
		</div>	  	

		<div className={style.buttonContainer}>
			<span className={style.navLinks}>{children}</span>
			<Button onClick={()=> console.log("Shared")}>Share</Button>
		</div>

	</header>
  )
}

export default Header