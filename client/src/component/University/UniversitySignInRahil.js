import React, { useState } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import * as api from "../../api/index";
import { useDispatch } from "react-redux";
import { UniversitySignIn } from "../../actions/auth";
import { Navigate, useNavigate } from "react-router-dom";

const UniversitySignInRahil = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    UniversityEmail: "",
    UniversityPassword: "",
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
    // try {
    //   const response = await api.UniversitySignIn(formData);
    //   if(response.status === 201) console.log(response.data);
    //   else{
    //     console.log("mil gaya");
    //     console.log(response.data);
    //   }

    // } catch (error) {
    //    console.log(error);
    // }
    console.log("outside");
    dispatch(UniversitySignIn(formData, navigate));
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleFormSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="UniversityEmail"
          value={formData.UniversityEmail}
          onChange={handleInputChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          name="UniversityPassword"
          value={formData.UniversityPassword}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default UniversitySignInRahil;
