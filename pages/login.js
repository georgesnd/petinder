import styles from "../styles/Login.module.css"
import Head from "next/head"
import Link from "next/link"
import Router from 'next/router'
import React, { useState } from 'react'

const Users = [
  {
    email: "john@email.com",
    password: "12345"
  },
  {
    email: "tom@email.com",
    password: "54321"
  },
  {
    email: "matt@email.com",
    password: "101010"
  },
  {
    email: "steve@email.com",
    password: "001122"
  },
  {
    email: "1",
    password: "1"
  },
]

export default function Login() {

  const [details, setDetails] = useState({email:"", password:""})

  const submitHandler = e => {
    e.preventDefault();
    login(details)

  }
  

 //const[user, setUser] = useState({email:"", password:""});
  const [error, setError] = useState("");

  const login = () => {

    const index = Users.findIndex(item => item.email === details.email)
    
    if (index > -1) {
      // we found the user with this email
      if (Users[index].password === details.password) {
        console.log('validation: user & pass ok')
        Router.push('/')
      } else {
        
        console.log('validation: user & pass NOT ok')
        setError("Details do not match");
        alert('Wrong user name or password')
      }
    } else {
      console.log('validation: user & pass NOT ok')
      setError("Details do not match");
      

    }

    
}








  


 

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
     
    
        <form onSubmit={submitHandler} className={styles.form}>
          {(error != "") ? ( <div className="error">{error}</div> ) : ""}

      
        <input type="email" placeholder="Email Address" required onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
        
        
        
        
        <input type="password" placeholder="Password" required onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
         
 
         <button className={styles.btn} type="submit" onClick={e => submitHandler(e)}>
        Login
        </button>
        
        
        
        <button className={styles.btn2}>
        <Link href="/createAccount"><a>Create Account</a></Link>
        </button>
 
 </form>
 
  </div>
</>
  )}
