import petInfo from "../data/petInfo.json";
import Card from "./components/Card";
import styles from "../styles/Card.module.css";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  return {
    props: {
      petcards: petInfo,
    },
  };
};

export default function Pets({ petcards }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>PetTinder</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <div className={styles.findyourfriend}>
          <div className={styles.bouncingtext}>
            <div className={styles.f}>F</div>
            <div className={styles.i}>i</div>
            <div className={styles.n}>n</div>
            <div className={styles.d}>d</div>
            <div className={styles.fr}>F</div>
            <div className={styles.r}>r</div>
            <div className={styles.ie}>i</div>
            <div className={styles.e}>e</div>
            <div className={styles.nd}>n</div>
            <div className={styles.d}>d</div>
            <div className={styles.s}>s</div>

            <div className="shadow"></div>
            <div className="shadow-two"></div>
          </div>
        </div>

        <div className={styles.carddiv}>
          {petcards.map((item) => {
            return (
              <Link href={`/Pets/${item.id}`} key={item.id}>
                <a>
                  {" "}
                  <Card key={item.id} item={item} />
                </a>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
