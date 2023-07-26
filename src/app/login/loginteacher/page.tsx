"use client";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "../../page.module.css";

const Loginteacher = () => {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>Loginteacher</h1>
      <br />
      <button onClick={() => router.replace("/login")}>go to login</button>
      <br />
      <button onClick={() => router.replace("/")}>go to Home</button>
    </main>
  );
};

export default Loginteacher;
