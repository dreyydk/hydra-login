import Image from "next/image";
import styles from "./styles.module.css";
import logo from "../../../public/logowhite.png";

export default function Login() {
  return (
    <div className={styles.container}>
      <h1 className={styles.hydraTitle}>HYDRA</h1>
      <form action="submit" className={styles.form}>
        <input type="text" placeholder="Username" className={styles.input} />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
      <a href="https://hydra-lp.vercel.app">
        <Image
          src={logo}
          width={100}
          alt="Logo"
          className={styles.logo}
          priority
        />
      </a>
    </div>
  );
}
