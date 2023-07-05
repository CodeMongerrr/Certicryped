import React, { useState } from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import OwnerSignIn from './OwnerSignIn';
import OwnerSignUp from './OwnerSignUp';
import { connect } from '../../functions';
const OwnerAuth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    isSignUp = connect()
  };
//   console.log(isSignUp);

  return (
    <div>
      <Button onClick={toggleSignUp} variant="contained" color="primary">
        {isSignUp ? 'Sign In' : 'Sign Up'}
      </Button>
      {isSignUp ? <OwnerSignUp /> : <OwnerSignIn />}
    </div>
  );
};

export default OwnerAuth;
