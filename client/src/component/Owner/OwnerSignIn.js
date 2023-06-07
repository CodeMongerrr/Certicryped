import React, { useState } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import * as api from "../../api/index";
import { useDispatch } from "react-redux";
import { OwnerSignIn } from "../../actions/auth";
import { Navigate, useNavigate } from "react-router-dom";

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
    // try {
    //   const response = await api.OwnerSignIn(formData);
    //   if(response.status === 201) console.log(response.data);
    //   else{
    //     console.log("mil gaya");
    //     console.log(response.data);
    //   }

    // } catch (error) {
    //    console.log(error);
    // }
    console.log("outside");
    dispatch(OwnerSignIn(formData, navigate));
  };

  return (
    <Container maxWidth="sm">
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
    </Container>
  );
};

export default OwnerSignin;
