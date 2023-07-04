import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import img from "../../images/grey.jpg";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import CSVReader from "react-csv-reader";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey", // Update the background color to grey
    // backgroundImage: `url(${img})`,
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

const GranteePortal = ({ getNFTs, get_ids_of_owner }) => {
  const classes = useStyles();
  const [grantee, setgrantee] = useState("");
  const nftdata = [];
  const handleSubmit = async (e) => {
    e.preventDefault();
    getNFTs(grantee);
  };
  
  return (
    <Box className={classes.root}>
        <input type="text" value={grantee} onChange={(e) => setgrantee(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
    </Box>
  );
};

export default GranteePortal;
