"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";


export default function Home() {
  const scene = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start start", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], ["300px", "3000px"]);

  return (
    <>
      <div style={{ height: "30vh" }}></div>

      <h1>Look at Masking using svg</h1>

      <div className={styles.main} ref={scene}>
        <motion.div className={styles.mask} style={{ maskSize: imageScale }}>
          <img className={styles.image} src="/cement-industry.jpg" />
        </motion.div>
      </div>

      <div style={{ height: "100vh" }}></div>
    </>
  );
}


