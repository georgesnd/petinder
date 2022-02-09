
import styles from "../../styles/Chat.module.css"
import ActiveMessages from "./ActiveMessages";
import Image from "next/image";



export default function Chat ({name, message, profilePic, timestamp}){
   

    return (
         
         <div >

            
            <div className={styles.chatOne} >
                
                  <Image className={styles.chatImage} src={profilePic} alt="#" width={100} height={100}/>
            <div className={styles.chatDetails}> 
                <div>
                <h3>{name}</h3>
                <p>{message}</p>  
                </div>
                <div>
                <p className={styles.chat__timestamp}>{timestamp}</p>
                </div>
            </div>
            </div>
            
          
          
   
        </div>
       
    )
}