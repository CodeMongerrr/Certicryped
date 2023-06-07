import React, { useState } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import * as api from "../../api/index";
import { useDispatch } from "react-redux";
import { Universitysignup } from "../../actions/auth";
import { useNavigate } from "react-router-dom";

const UniversitySignupRahil = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    UniversityName: "",
    UniversityEmail: "",
    UniversityPassword: "",
    UniversityConfirmPassword: "",
    Branch: "",
    UniversityPublicKey: "",
    BranchPublicKey: "",
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
    //   const response = await api.UniversitySignUp(formData);
    //   if(response.status === 201) console.log(response.data);
    //   else{
    //     console.log("ban gaya");
    //     console.log(response.data);
    //   }

    // } catch (error) {
    //    console.log(error);
    // }
    dispatch(Universitysignup(formData, navigate));
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleFormSubmit}>
        <TextField
          label="Name of University"
          variant="outlined"
          fullWidth
          margin="normal"
          name="UniversityName"
          value={formData.UniversityName}
          onChange={handleInputChange}
        />
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
        <TextField
          label="Confirm PasswordF"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          name="UniversityConfirmPassword"
          value={formData.UniversityConfirmPassword}
          onChange={handleInputChange}
        />
        <TextField
          label="Branch"
          variant="outlined"
          fullWidth
          margin="normal"
          name="Branch"
          value={formData.Branch}
          onChange={handleInputChange}
        />
        <TextField
          label="University Public Key"
          variant="outlined"
          fullWidth
          margin="normal"
          name="UniversityPublicKey"
          value={formData.UniversityPublicKey}
          onChange={handleInputChange}
        />
        <TextField
          label="Branch Public Key"
          variant="outlined"
          fullWidth
          margin="normal"
          name="BranchPublicKey"
          value={formData.BranchPublicKey}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default UniversitySignupRahil;
