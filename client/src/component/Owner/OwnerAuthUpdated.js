import React,{ useState } from 'react';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { OwnerSignIn } from "../../actions/auth";
import { Navigate, useNavigate } from "react-router-dom";


// import { login } from './actions'; // Assuming you have an 'actions' file that exports the login action

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'black',
    color: 'white',
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1.5, 4),
  },
}));

const OwnerAuthUpdated = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    OwnerEmail: "rahildeepakgodha@gmail.com",
    OwnerPassword: "Rahil@05082003",
  });

  const handleLogin = () => {
    // dispatch(login()); // Dispatch the login action
    dispatch(OwnerSignIn(formData, navigate));
  };

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} variant="h4" component="h1">
        Owner Authentication
      </Typography>
      <Button className={classes.button} variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default OwnerAuthUpdated;
