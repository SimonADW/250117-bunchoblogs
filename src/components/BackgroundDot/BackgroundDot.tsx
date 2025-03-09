import React from "react";
import styles from "./BackgroundDot.module.css";

const BackgroundDot = () => {
  const [opacity, setOpacity] = React.useState(1);

  React.useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      // Prevent division by zero
      const newOpacity = maxScroll > 0 ? Math.max(1 - scrollPosition / maxScroll, 0): 1;
      
      
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={styles.background}
      style={{ opacity }}
    />
  );
};

export default BackgroundDot;