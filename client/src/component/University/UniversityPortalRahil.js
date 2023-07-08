import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, TextField, Button, Typography } from "@material-ui/core";
import img from "../../images/4127298.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
      "& input": {
        color: "#fff",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
  },
  submitButton: {
    marginTop: theme.spacing(3),
  },
  heading: {
    marginBottom: theme.spacing(3),
    color: "#fff",
    fontFamily: "Arial",
    fontSize: "28px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
}));

const UniversityPortalRahil = ({ mintCertificate, uploadFile, getIdsOfOwner }) => {
  const classes = useStyles();
  const [publicKey, setPublicKey] = useState("");
  const [formData, setFormData] = useState({
    name: "Aditya Roshan Joshi",
    description: "Blockchain Developer",
    image: "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png",
    attributes: [
      {
        trait_type: "Program",
        value: "Blockchain",
      },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadFile(formData);
    mintCertificate(publicKey, formData);
  };

  const handleInputChange = (e, property) => {
    setFormData((prevState) => ({
      ...prevState,
      [property]: e.target.value,
    }));
  };

  return (
    <Box className={classes.root}>
      <Container maxWidth="sm">
        <form className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h5" className={classes.heading}>
            Certificate Details
          </Typography>
          <TextField
            className={classes.input}
            label="Name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={(e) => handleInputChange(e, "name")}
          />
          <TextField
            className={classes.input}
            label="Description"
            variant="outlined"
            fullWidth
            value={formData.description}
            onChange={(e) => handleInputChange(e, "description")}
          />
          <TextField
            className={classes.input}
            label="Image URL"
            variant="outlined"
            fullWidth
            value={formData.image}
            onChange={(e) => handleInputChange(e, "image")}
          />
          <TextField
            className={classes.input}
            label="Public Key"
            variant="outlined"
            fullWidth
            value={publicKey}
            onChange={(e) => setPublicKey(e.target.value)}
          />
          <Button
            className={classes.submitButton}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default UniversityPortalRahil;
