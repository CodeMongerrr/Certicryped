import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import img from "../images/rm373batch2-04.jpg";
import {
  Box,
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  IconButton,
  Card,
  CardContent,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({
  homeBody: {
    position: "relative",
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  rightContent: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  homeText: {
    color: "#FFFFFF",
    fontSize: "5rem",
    fontWeight: 900,
    margin: theme.spacing(2),
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
    fontFamily: "Roboto",
  },
  buttonText: {
    color: theme.palette.primary.main,
    fontSize: "1.5rem",
    textTransform: "capitalize",
    marginTop: theme.spacing(2),
  },
  loginButton: {
    marginTop: theme.spacing(17.5),
    width: "120px",
    borderRadius: theme.spacing(100),
    backgroundImage: "linear-gradient(to right, #4a47a3, #2c3e50)",
    color: "#FFFFFF",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[5],
    outline: "none",
    maxWidth: "80%",
    width: "90%",
    position: "relative", // Added position relative
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(4),
    position: "absolute", // Added position absolute
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
    cursor: "pointer",
    margin: theme.spacing(2), // Added margin
  },
  image: {
    width: "80px",
    height: "80px",
  },
}));

export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOwnerClick = () => {
    navigate("/owner");
  };

  const handleUniversityClick = () => {
    navigate("/university");
  };

  const handleGranteeClick = () => {
    navigate("/grantee");
};

  const handleLoginClick = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.homeBody}>
      {!open && ( // Conditionally render the Typography only if open is false
        <div>
          <Typography className={classes.homeText} variant="h1">
            <Typed
              strings={[
                "NFT Powered Credentials",
                "Decentralized Certificates",
                "Blockchain Accredition",
              ]}
              typeSpeed={60}
              backSpeed={30}
              loop
              cursorRenderer={(cursor) => (
                <span style={{ color: "#FFFFFF" }}>{cursor}</span>
              )}
            />
          </Typography>
        </div>
      )}
      <Button
        className={classes.loginButton}
        variant="contained"
        color="primary"
        onClick={handleLoginClick}
      >
        Login
      </Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.modalContent}>
            <div className={classes.cardContainer}>
              <Card className={classes.card} onClick={handleOwnerClick}>
                <IconButton aria-label="Owner Login">
                  <AccountCircle fontSize="large" />
                </IconButton>
                <CardContent>
                  <Typography className={classes.buttonText}>
                    Owner Login
                  </Typography>
                </CardContent>
              </Card>
              <Card className={classes.card} onClick={handleUniversityClick}>
                <IconButton aria-label="University Login">
                  <AccountCircle fontSize="large" />
                </IconButton>
                <CardContent>
                  <Typography className={classes.buttonText}>
                    University Login
                  </Typography>
                </CardContent>
              </Card>
              <Card className={classes.card} onClick={handleGranteeClick}>
                <IconButton aria-label="Certificate Holder Login">
                  <AccountCircle fontSize="large" />
                </IconButton>
                <CardContent>
                  <Typography className={classes.buttonText}>
                    Certificate Holder Login
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
