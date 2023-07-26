"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <button onClick={() => router.replace("/login")}>go to Login</button>
      <br />
      <button onClick={() => router.replace("/about")}>go to About</button>
    </main>
  );
}
