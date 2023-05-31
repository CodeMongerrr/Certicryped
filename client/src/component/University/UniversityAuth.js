import React, { useState } from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import UniversitySignupRahil from './UniversitySignupRahil';
import UniversitySignInRahil from './UniversitySignInRahil';

const UniversityAuth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div>
      {(isSignUp) ? (<UniversitySignupRahil/>) : (<UniversitySignInRahil/>)}
    </div>
  );
};

export default UniversityAuth;
