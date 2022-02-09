import styles from '../styles/popUp.module.css'
export default function ModalPopUps(props){
  
    
    return (props.onClick) ? (
        <div className={styles.popUPMain}>
            <div className={styles.PopUpInside}>
            <button onClick={()=> props.setonClick(false)} className={styles.modalButton}>Close</button>
            {props.children}
            </div>
            
        </div>
    ) : '';
        
    
        
        
    
}
