import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PetsIcon from "@mui/icons-material/Pets";
import EmailIcon from "@mui/icons-material/Email";
import styles from "../../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerdiv}>
          <Link href="/">PETinder</Link>
          <Link href="/Pets">
            <PetsIcon />
          </Link>
        </div>
        <div>
          <Link href="/Chats">
            <EmailIcon />
          </Link>
          <Link href="/login">
            <AccountBoxIcon />
          </Link>
        </div>
      </header>
    </>
  );
}
