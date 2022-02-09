
import petInfo from "../data/petInfo.json"
import Card from "./components/Card"
import styles from '../styles/banner.module.css'
export default function PetLink() {

    return (
        <div className={styles.AllPetStyle}>
            <h1>Meet Your Next Best Friend!!</h1>
         <div className={styles.petStyle}>
                {
                    petInfo.map((item,idex)=> {
                    if(idex < 4) {
                        return <Card key={item.id} className={styles.onePet} item={item}/>
                        }
                        else {
                                return null
                            }
                         })
                 }
         </div>
        
       
            
       </div>
            
            
    )

}