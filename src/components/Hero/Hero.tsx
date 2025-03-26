
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import style from './Hero.module.css'

const Hero = () => {
  return (
	<section className={style.heroSection}>
      <div>Welcome to <span>Bunch o' Blogs</span></div>
      <p>Explore captivating stories, trends, and insights across various genres of music.</p>
      <Button style={{width: "12rem"}}>
        <Link to={"/blogs"}>Start Reading!</Link>
      </Button>
  	</section>
  )
}

export default Hero