import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import bgvideo from "../../images/AjarJaggedClumber.mp4";

const useStyles = makeStyles((theme) => ({
  universityBody: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 64px)", // Subtract the height of the above navbar component
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
  },
  formControl: {
    marginRight: "20px",
  },
  videoBackground: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  },
}));

export default function UniversityPortal({ mintCertificate }) {
  const classes = useStyles();
  const [name, setname] = useState("");
  const [program, setprogram] = useState("");
  const [holder_key, setholder_key] = useState(0x0000);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await mintCertificate(holder_key, { name: name, program: program, holder_key: holder_key });
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <div className={classes.universityBody}>
        <video className={classes.videoBackground} autoPlay loop muted>
          <source src={bgvideo} type="video/mp4" />
        </video>
        <div className={classes.formContainer}>
          <form onSubmit={handleSubmit}>
            <h6 className={classes.formControl}>Name :</h6>
            <div className={classes.formControl}>
              <TextField
                type="text"
                variant="outlined"
                value={name}
                onChange={(event) => setname(event.target.value)}
              />
            </div>
            <h6 className={classes.formControl}>Program of Study:</h6>
            <div className={classes.formControl}>
              <TextField
                type="text"
                variant="outlined"
                value={program}
                onChange={(event) => setprogram(event.target.value)}
              />
            </div>
            <h6 className={classes.formControl}>Public Address :</h6>
            <div className={classes.formControl}>
              <TextField
                type="text"
                variant="outlined"
                value={holder_key}
                onChange={(event) => setholder_key(event.target.value)}
              />
            </div>
            <Button variant="contained" color="primary" type="submit">
              Mint Certificate
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
}
