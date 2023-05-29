import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FileBase from 'react-file-base64';
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
    backgroundColor: "#f0f0f0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: "#fff",
    borderRadius: theme.spacing(1),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  csvReader: {
    marginBottom: theme.spacing(2),
  },
  heading: {
    marginBottom: theme.spacing(2),
  },
}));

const MyComponent = () => {
  const classes = useStyles();
  const [csvData, setCsvData] = useState([]);
  const [formData, setFormData] = useState({
    title: "Asset Metadata",
    type: "object",
    properties: {
      name: "",
      description: "",
      image: null,
      createAt: null,
      DateofIssue: null,
    },
  });

  const handleCsvFile = (data, fileInfo) => {
    setCsvData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    const getCurrentTime = () => {
      const currentTime = new Date().toLocaleTimeString();
      setFormData((prevState) => ({
        ...prevState,
        properties: {
          ...formData.properties,
          createAt: currentTime,
        },
      }));
    };

    getCurrentTime();
  }, []);

  formData.properties.UniversityName = "IIT-ISM-Dhanbad";

  return (
    <Box className={classes.root}>
      <Container maxWidth="sm">
        <form className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h5" className={classes.heading}>
            Certificate Details
          </Typography>
          <CSVReader
            className={classes.csvReader}
            onFileLoaded={handleCsvFile}
            parserOptions={{ header: true, dynamicTyping: true }}
          />
          <TextField
            className={classes.input}
            label="Name"
            variant="outlined"
            fullWidth
            value={csvData[0]?.Name || formData.properties.name}
            onChange={(e) => {
              setFormData({
                ...formData,
                properties: {
                  ...formData.properties,
                  name: e.target.value,
                },
              });
            }}
          />
          <TextField
            className={classes.input}
            label="Description"
            variant="outlined"
            fullWidth
            value={csvData[0]?.Description || formData.properties.description}
            onChange={(e) => {
              setFormData({
                ...formData,
                properties: {
                  ...formData.properties,
                  description: e.target.value,
                },
              });
            }}
          />
          <TextField
            className={classes.input}
            label="Date of Issue"
            variant="outlined"
            fullWidth
            type="date"
            value={csvData[0]?.Description || formData.properties.DateofIssue}
            onChange={(e) => {
              setFormData({
                ...formData,
                properties: {
                  ...formData.properties,
                  DateofIssue: e.target.value,
                },
              });
            }}
          />
          
          <TextField
            className={classes.input}
            label="Field 3"
            variant="outlined"
            fullWidth
            value={csvData[0]?.field3 || ""}
          />
          <TextField
            className={classes.input}
            label="Field 4"
            variant="outlined"
            fullWidth
            value={csvData[0]?.field4 || ""}
          />
          <TextField
            className={classes.input}
            label="Field 5"
            variant="outlined"
            fullWidth
            value={csvData[0]?.field5 || ""}
          />
          {/* <input
            className={classes.input}
            type="file"
            accept=".jpg, .png"
            onChange={(e) => {
              const file = e.target.files[0];
              setFormData({
                ...formData,
                properties: {
                  ...formData.properties,
                  image: file,
                },
              });
            }}
          /> */}
          <div className={classes.fileInput}><FileBase type='file' multiple={false} onDone={({ base64 }) => setFormData({ ...formData,properties:{...formData.properties,image:base64 } })} /> </div>
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

export default MyComponent;
