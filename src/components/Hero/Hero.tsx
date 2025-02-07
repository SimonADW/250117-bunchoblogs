
import Button from '../Button/Button'
import style from './Hero.module.css'

const Hero = () => {
  return (
	<section className={style.heroSection}>
      <h2>Welcome to Bunch o' Blogs</h2>
      <p>Explore captivating stories, trends, and insights across various genres of music.</p>
      <a href="/blogs"><Button style={{width: "12rem"}}>Get Started</Button></a>
  	</section>
  )
}

export default Hero