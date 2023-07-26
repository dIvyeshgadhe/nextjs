"use client";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "../../page.module.css";

const Aboutcollege = () => {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>Aboutcollege</h1>
      <br />
      <button onClick={() => router.replace("/about")}>go to about</button>
      <br />
      <button onClick={() => router.replace("/")}>go to Home</button>
    </main>
  );
};

export default Aboutcollege;
