// import Link from "next/link";
// import styles from "../../styles/Home.module.css";

// export default function Footer() {
//   return (
//     <footer className={styles.footer}>
//       <div>© 2022 Group Project</div>
//       <Link href="/TermsandPrivacy">Terms & Privacy</Link>
//       <Link href="/aboutus">About Us</Link>
//     </footer>
//   );
// }

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import styles from "../../styles/banner.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {

  return <div className={styles.FootContainer}> 
    
    <h2>Download Pawmates Today And Meet Your Neighbourhood Dogs</h2>
    <h6>Download our Mobile App from the Apple store.</h6>
    <CloudDownloadIcon/>
    <h2>Or</h2>
    <p>Have questions, problems, or feedback? Feel free to contact us. Visit us at our Instagram or Facebook pages and win amazing prizes and giveaways!
    </p>
    <button>Contact Us at pawmatesapp@gmail.com</button>
    <p>Or Follow us Here </p>
  
    <div className={styles.footFavi} >
    
       <FacebookIcon/>
      <InstagramIcon/>
    </div>
   
    </div>;
  }