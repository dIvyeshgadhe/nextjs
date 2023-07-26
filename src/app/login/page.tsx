"use client";

import React from "react";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <h1>login</h1>
      <br />
      <button onClick={() => router.replace("/")}>go to Home</button>
      <br />
      <button onClick={() => router.replace("/login/loginteacher")}>
        go to teacher
      </button>
      <br />
      <button onClick={() => router.replace("/login/loginstudent")}>
        go to student
      </button>
    </main>
  );
};

export default Login;
