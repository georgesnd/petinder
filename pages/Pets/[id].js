import petInfo from "../../data/petInfo.json";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import buttonstyle from "../../styles/Button.module.css";
import Head from "next/head";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Buttons from "../components/Buttons";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import Link from "next/link";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useRouter } from "next/router";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const getStaticProps = async ({ params }) => {
  const petInfos = petInfo.find((item) => item.id.toString() === params.id);
  return {
    props: {
      ...petInfos,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = petInfo.map((item) => ({
    params: { id: item.id.toString() },
  }));
  return { paths, fallback: false };
};

export default ({ name, breed, img, age, character }) => {
  const [firstlink, setfirstlink] = useState(false);
  const [showbox, setshowbox] = useState(false);
  const router = useRouter();
  let togglelike = () => {
    setfirstlink(!firstlink);
  };

  const handleClickOpen = () => {
    setshowbox(true);
  };

  const handleClose = () => {
    setshowbox(false);
  };
  return (
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
      <main className={styles.main}>
        <div className="container mt-5 mb-5">
          <div className="row no-gutters d-flex align-items-center ">
            <div className="col-md-4 col-lg-4">
              <div className={buttonstyle.custombutton}>
                <Image src={img} width={400} height={400} />
                <Link href="/login">
                  <Buttons
                    className={buttonstyle.icons}
                    onCustomClick={() => togglelike()}
                  >
                    {firstlink === false ? (
                      <div>
                        <FavoriteIcon />
                      </div>
                    ) : (
                      <div className={buttonstyle.popup}>
                        <Button
                          variant="outlined"
                          onCustomClick={handleClickOpen}
                        >
                          <HeartBrokenIcon />
                        </Button>
                        <Dialog
                          open={open}
                          TransitionComponent={Transition}
                          keepMounted
                          onClose={handleClose}
                          aria-describedby="alert-dialog-slide-description"
                        >
                          <DialogTitle>{"IS THIS A MATCH? :)"}</DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                              That could be almost a perfect match! Why don't
                              you message?!
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>Maybe Later</Button>
                            <Button onClick={() => router.push("/Chats")}>
                              Send Message!
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    )}
                  </Buttons>
                </Link>
              </div>
            </div>
            <div className="col-md-8 col-lg-8">
              <div className="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
                <div className="d-flex flex-column">
                  <h3 className="display-5 my-3">{name}</h3>
                  <h5>
                    Hello! My name is {name}. I am {age} years old and looking
                    for some paw friends to play with!
                  </h5>
                </div>
                <div className="d-flex justify-content-around w-25 px-5">
                  <FacebookIcon /> <InstagramIcon />
                </div>
              </div>
              <div className="p-3 bg-black text-white">
                <h6>{breed}</h6>
              </div>
              <div className="d-flex flex-row text-white justify-content-center">
                <div
                  className="p-3 bg-primary text-center skill-block"
                  style={{ width: `${character.friendly}%` }}
                >
                  <h4>{character.friendly}%</h4>
                  <h6>Friendly</h6>
                </div>
                <div
                  className="p-3 bg-success text-center skill-block"
                  style={{ width: `${character.health}%` }}
                >
                  <h4>{character.health}%</h4>
                  <h6>Health</h6>
                </div>
                <div
                  className="p-3 bg-warning text-center skill-block"
                  style={{ width: `${character.energy}%` }}
                >
                  <h4>{character.energy}%</h4>
                  <h6>Energy</h6>
                </div>
                <div
                  className="p-3 bg-danger text-center skill-block"
                  style={{ width: `${character.anger}%` }}
                >
                  <h4>{character.anger}%</h4>
                  <h6>Anger</h6>
                </div>
                <div
                  className="p-3 bg-secondary text-center skill-block"
                  style={{ width: `${character.shy}%` }}
                >
                  <h4>{character.shy}%</h4>
                  <h6>Shy</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
