import React, { useState } from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import UniversitySignupRahil from './UniversitySignupRahil';
import UniversitySignInRahil from './UniversitySignInRahil';

const UniversityAuth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      <Button onClick={toggleSignUp} variant="contained" color="primary">
        {isSignUp ? 'Sign In' : 'Sign Up'}
      </Button>
      {isSignUp ? <UniversitySignupRahil /> : <UniversitySignInRahil />}
    </div>
  );
};

export default UniversityAuth;
