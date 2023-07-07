import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FileBase from "react-file-base64";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import CSVReader from "react-csv-reader";
import img from "../../images/grey.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
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
        borderColor: "rgba(256, 256, 256, 0.6)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(256, 256, 256, 0.6)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(256, 256, 256, 0.6)",
      },
      "& input": {
        color: "rgba(256, 256, 256, 0.9)", // Set the input text color to white
      },
    },
    "& .MuiInputLabel-root": {
      color: "rgba(256, 256, 256, 0.9)",
    },
  },
  submitButton: {
    marginTop: theme.spacing(3),
  },
  csvReader: {
    marginBottom: theme.spacing(3),
    color: "rgba(256, 256, 256, 0.9)",
  },
  heading: {
    marginBottom: theme.spacing(3),
    color: "rgba(256, 256, 256, 0.9)",
    fontFamily: "Arial",
    fontSize: "28px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  fileInput: {
    marginBottom: theme.spacing(3),
    color: "rgba(256, 256, 256, 0.9)",
  },
}));

const UniversityPortalRahil = ({ mintCertificate, uploadFile, get_ids_of_owner }) => {
  const classes = useStyles();
  const [publickey, setPublickey] = useState("");
  const [grantee, setgrantee] = useState("");
  const [formData, setFormData] = useState({
    name: "Aditya Roshan Joshi",
    description: "Blockchain Developer",
    image:
      "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png",

    attributes: [
      {
        trait_type: "Program",
        value: "Blockchain",
      },
    ],
  });
  const handlebutton = (e) => {
    e.preventDefault();
    get_ids_of_owner(grantee);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    uploadFile(formData);
    mintCertificate(publickey, formData);
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
            value={publickey}
            onChange={(e) =>
              setPublickey(e.target.value)
            }
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
      <form onSubmit={handlebutton}>
      <input
        type="text"
        name="inputField"
        value={grantee}
        onChange={(e) => setgrantee(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    </Box>
  );
};

export default UniversityPortalRahil;
