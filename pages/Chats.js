
import styles from "../styles/Chat.module.css"
import Chat from "./components/chat";
import ActiveMessages from './components/ActiveMessages';
import {BiMessageSquareEdit} from 'react-icons/bi'

export default function Chats(){


    return(
      
        <div className={styles.chatModule}>
            
            
    <div className={styles.allMessages}>
      <div className={styles.chatHead}>
        <h2>CHATS</h2>
        <BiMessageSquareEdit className={styles.msgIcon}/>
      </div>
        

     <Chat
      id ='1'
      name="Lucky"
      message="Wuff what's up mate?" 
      timestamp="6 mins ago" 
      profilePic="https://gooddoggies.online/wp-content/uploads/2020/06/5-Tips-To-Training-A-Labrador-Puppy-1.jpg"
      />
      <Chat
      name="Billy woof"
      message="Bork it's great to meet you" 
      timestamp="1 hr ago" 
      profilePic="https://thehappypuppysite.com/wp-content/uploads/2019/06/Mini-Shiba-Inu-HP-long.jpg"/>
      <Chat
      name="Mister Corgi"
      message="Awooo" 
      timestamp="4 hrs ago" 
      profilePic="https://i.pinimg.com/originals/cb/d4/1f/cbd41fb83c06a915a79ed0ab9ca63789.jpg"/>

<Chat
      name="Rex"
      message="Wuff" 
      timestamp="6 mins ago" 
      profilePic="https://gooddoggies.online/wp-content/uploads/2020/06/5-Tips-To-Training-A-Labrador-Puppy-1.jpg"
      />
      <Chat
      name="Lexy"
        message="Bork" 
      timestamp="1 hr ago" 
      profilePic="https://thehappypuppysite.com/wp-content/uploads/2019/06/Mini-Shiba-Inu-HP-long.jpg"/>
      <Chat
      name="Corina"
      message="Awooo" 
      timestamp="4 hrs ago" 
      profilePic="https://i.pinimg.com/originals/cb/d4/1f/cbd41fb83c06a915a79ed0ab9ca63789.jpg"
     
      />
       
        </div>
       
          
        <ActiveMessages 
         profilePic="https://gooddoggies.online/wp-content/uploads/2020/06/5-Tips-To-Training-A-Labrador-Puppy-1.jpg"
        /> 
        </div>

        
    )
}
