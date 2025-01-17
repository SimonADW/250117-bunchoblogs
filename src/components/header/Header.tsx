import React from 'react'
import logo from '../../assets/logo/bunchoblogs-logo.jpeg';
import style from './Header.module.css';
import { ChildrenProps } from '../../types/types';
import Button from '../button/Button';


const Header = ({children}: ChildrenProps) => {
  return (
	<header className={style.home__header}>
		<div className={style.logoContainer}>
			<img src={logo} alt="logo" />
			<span>{children}</span>
		</div>

		<div className={style.buttonContainer}>
			<Button onClick={()=> console.log("Shared")}>Share</Button>
		</div>

	</header>
  )
}

export default Header