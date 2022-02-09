import styles from "../styles/Header.module.css";
import Head from "next/head";

export default function Login() {
  //-----HELLO CHRIS, I JUST ADDED THE STYLING TO YOUR PART  TO MAKE THE SAME WITH OTHERS.-------

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Petinder</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
            rel="stylesheet"
          />
        </Head>
        <main className={styles.main}></main>
      </div>
    </>
  );
}
