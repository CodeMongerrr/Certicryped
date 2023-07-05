import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, IconButton } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Typewriter from "react-typewriter-effect";
import Typed from "react-typed";
import img from "../images/design.jpg";
import bgvideo from "../images/AjarJaggedClumber.mp4";
import ownerImage from "../images/ownner.png";
import universityImage from "../images/university.png";
import certificateHolderImage from "../images/grantee.png";

const useStyles = makeStyles((theme) => ({
  homeBody: {
    position: "relative",
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  videoBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  },
  contentContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  leftContent: {
    flex: 3,
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rightContent: {
    flex: 1,
    padding: theme.spacing(4),
    backgroundColor: "black",
    display: "flex",
    margin: "20px",
    marginRight: "80px",
    opacity: "80%",
    maxWidth: "400px",
    borderRadius: "40px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  homeText: {
    color: "#FFFFFF",
    fontSize: "5rem",
    fontWeight: 900,
    margin: theme.spacing(2),
    top: "400px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
    fontFamily: "Roboto",
  },
  button: {
    margin: theme.spacing(2),
    color: theme.palette.primary.main,
    fontSize: "2rem",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
  },
  buttonText: {
    color: theme.palette.primary.main,
    fontSize: "1.5rem",
    textTransform: "capitalize",
  },
  divButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },
  image: {
    width: "80px",
    height: "80px",
  },
}));

export default function Home() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleOwnerClick = () => {
    navigate("./owner");
  };

  const handleUniversityClick = () => {
    navigate("./university");
  };

  const handleGranteeClick = () => {
    navigate("./grantee");
  };

  return (
    <Box className={classes.homeBody}>
      
        <div className={classes.leftContent}>
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
              // Add any desired options for the Typed component
              // For example:
              // loopCount={5} // Number of times to loop through the strings
              // typedRef={(typed) => { this.typed = typed; }} // Reference to the Typed instance
              // onComplete={() => { console.log('Typed animation complete'); }} // Callback when animation completes
            />
          </Typography>
        </div>
      <div className={classes.rightContent}>
        <Box>
          <div className={classes.divButton}>
            <IconButton
              className={classes.button}
              onClick={handleOwnerClick}
              aria-label="Owner Login"
            >
              <img src={ownerImage} alt="Owner" className={classes.image} />
            </IconButton>
            <Typography className={classes.buttonText}>Owner Login</Typography>
          </div>
          <div className={classes.divButton}>
            <IconButton
              className={classes.button}
              onClick={handleUniversityClick}
              aria-label="University Login"
            >
              <img
                src={universityImage}
                alt="University"
                className={classes.image}
              />
            </IconButton>
            <Typography className={classes.buttonText}>
              University Login
            </Typography>
          </div>
          <div className={classes.divButton}>
            <IconButton
              className={classes.button}
              onClick={handleGranteeClick}
              aria-label="Certificate Holder Login"
            >
              <img
                src={certificateHolderImage}
                alt="Certificate Holder"
                className={classes.image}
              />
            </IconButton>
            <Typography className={classes.buttonText}>
              Certificate Holder Login
            </Typography>
          </div>
        </Box>
      </div>
    </Box>
  );
}
