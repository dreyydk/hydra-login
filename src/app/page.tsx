"use client";

import Login from "@/components/Login";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [register, setRegister] = useState(false);

  return (
    <main className={styles.main}>
      <Login />
    </main>
  );
}
