import React, { useState } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import * as api from "../../api/index";
import { useDispatch } from "react-redux";
import { Ownersignup } from "../../actions/auth";
import { useNavigate } from "react-router-dom";
const OwnerSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    OwnerName: "",
    OwnerEmail: "",
    OwnerPassword: "",
    OwnerConfirmPassword: "",
    OwnerPublicKey: "",
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
    //   const response = await api.OwnerSignUp(formData);
    //   if(response.status === 201) console.log(response.data);
    //   else{
    //     console.log("ban gaya");
    //     console.log(response.data);
    //   }

    // } catch (error) {
    //    console.log(error);
    // }
    console.log("before dispatchind action creater")
    dispatch(Ownersignup(formData, navigate));
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleFormSubmit}>
        <TextField
          label="Name of Owner"
          variant="outlined"
          fullWidth
          margin="normal"
          name="OwnerName"
          value={formData.OwnerName}
          onChange={handleInputChange}
        />
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
        <TextField
          label="Confirm PasswordF"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          name="OwnerConfirmPassword"
          value={formData.OwnerConfirmPassword}
          onChange={handleInputChange}
        />
        <TextField
          label="Owner Public Key"
          variant="outlined"
          fullWidth
          margin="normal"
          name="OwnerPublicKey"
          value={formData.OwnerPublicKey}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default OwnerSignUp;
