"use client";
import {useState} from "react";
import styles from "./page.module.css";
export default function Home() {
  const [name, setName] = useState("Anil");

  const apple = () => {
    setName("bind");
  };
  console.log("anshu", name);
  return (
    <main className={styles.main}>
      <h1>home page {name}</h1>
      <button onClick={apple}>click me </button>
    </main>
  );
}
