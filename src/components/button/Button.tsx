import React from 'react'
import style from './Button.module.css'


type ButtonProps = {
	  onClick?: () => void,
	  children: React.ReactNode	  
} & React.HTMLAttributes<HTMLButtonElement>

const Button = ({children , ...delegated}: ButtonProps) => {

  return (
	<button 
	className={style.genericButton}	
	{...delegated}
	>{children}</button>
  )
}

export default Button
