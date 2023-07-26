"use client";
import React from "react";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>about</h1>
      <br />
      <button onClick={() => router.replace("/")}>go to Home</button>
      <br />
      <button onClick={() => router.replace("/about/aboutcollege")}>
        go to college
      </button>
      <br />
      <button onClick={() => router.replace("/about/aboutstudent")}>
        go to student
      </button>
    </main>
  );
};

export default About;
