import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../../styles/Card.module.css";
import React from "react";

export default function Card({ item }) {
  const status = ["I'm Online!", "I'm Offline!"];
  let randomindex = Math.floor(Math.random() * 2);

  return (
    <div className={styles.cardcontainer}>
      <div className="card">
        <div className="card-body">
          <div className={styles.card}>
            <Image
              className={styles.imghover}
              src={item.img}
              width={500}
              height={500}
            />
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h3 className="card-title">{item.name}</h3>
                <p className="card-text">Age: {item.age}</p>
              </div>
              <div>
                <a href="#" className="btn btn-primary">
                  Paw Me!
                </a>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className={styles.online}>
              <div>
                <div
                  className={
                    randomindex
                      ? styles.offlineindicator
                      : styles.onlineindicator
                  }
                >
                  <span
                    className={randomindex ? styles.red : styles.blink}
                  ></span>
                </div>
                <h2 className={styles.onlinetext}>{status[randomindex]}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
