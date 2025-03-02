import React, { useEffect, useState } from "react";
import styles from "./BackgroundDot.module.css";

const BackgroundDot = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const newOpacity = Math.max(1 - scrollPosition / maxScroll, 0);
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