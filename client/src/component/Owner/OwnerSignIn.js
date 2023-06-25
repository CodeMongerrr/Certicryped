import React, { useState } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import * as api from "../../api/index";
import { useDispatch } from "react-redux";
import { OwnerSignIn } from "../../actions/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import bgvideo from "../../images/AjarJaggedClumber.mp4";

const useStyles = makeStyles((theme) => ({
  videoBackground: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
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
}));

const OwnerSignin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    OwnerEmail: "",
    OwnerPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    dispatch(OwnerSignIn(formData, navigate));
  };

  const classes = useStyles();

  return (
    <div>
      <video className={classes.videoBackground} autoPlay loop muted>
        <source src={bgvideo} type="video/mp4" />
      </video>
      <Container maxWidth="sm" className={classes.container}>
        <div className={classes.formContainer}>
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="OwnerEmail"
              value={formData.OwnerEmail}
              onChange={handleInputChange}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              name="OwnerPassword"
              value={formData.OwnerPassword}
              onChange={handleInputChange}
            />
            <Button variant="contained" color="primary" type="submit">
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default OwnerSignin;
