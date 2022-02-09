import styles from "../../styles/Chat.module.css"
import Image from "next/image";
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';


export default function ActiveMessages({profilePic}){
const [text, setText]=useState('');
const [chats, setChats]=useState([
    {chat: 'Hello',
    
},
    {chat:`I'm great`,
       
}
]);

const handleSend = (e) => {
    e.preventDefault();
    setChats([...chats, {chat:text}]);
    setText('')
}

    return(
        <div>
             <div className={styles.activeMessage}>
                 <div className={styles.chatHeader}>
                     <div><Image className={styles.chatImage} src={profilePic} alt="#"  width={50} height={50}/></div>
                     
                     <h3>Lucky <FiberManualRecordRoundedIcon className={styles.tick}/></h3>
                     
                     <p> <InfoIcon/></p> 
                 </div>
            <div className={styles.chatMessages}>
                <div>hey how are you</div>
                {chats.map(chat => (
                    <p><span>{chat.chat}</span></p>
                ))}
                
            </div>
            
            <form className={styles.messageForm} >
                <input type='textarea' placeholder="Message..." className={styles.messageInput} 
                value={text} 
                onChange = {e=>setText(e.target.value)} />
                <button type="submit" 
                onClick={handleSend} 
                className = {styles.inputButton}><SendIcon className={styles.send}/></button>
            </form>
            
         
            </div>
            
            
        </div>
    )
}