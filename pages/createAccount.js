import styles from "../styles/Login.module.css"
import Head from "next/head"
import Link from "next/link";

const isRegistered = () => { 
  return <input type="password" placeholder="Confirm Password" />;

} 




export default function Login() {

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
    
    
    <div className={styles.info}>
    <form className="form">
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Repeat Password" required />
        
        
        
        <button className={styles.btn2}>
        <Link href="/login">
          <a>Create Account</a>
        </Link>
        </button>
    </form>

    </div>
    



  </>
  )

}