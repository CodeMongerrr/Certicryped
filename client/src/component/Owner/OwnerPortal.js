import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import img from "../../images/bgimg.jpg";
import { getuniversites, updateUniversity } from "../../actions/universites";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  ownerBody: {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: theme.spacing(4),
    borderRadius: theme.spacing(1),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        borderWidth: 2,
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        borderWidth: 2,
      },
      "& input": {
        color: "white",
      },
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
  },
  button: {
    marginTop: theme.spacing(2),
    width: "200px",
  },
  text: {
    color: "white",
    marginBottom: theme.spacing(4),
  },
  universitiesContainer: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    // height: "100vh",
    width: "300px",
    // maxHeight: "20vh",
    overflowY: "auto",
  },
  card: {
    marginBottom: theme.spacing(2),
    width: "300px",
    height: "auto",
    backgroundColor: "#424242",
    color: "white",
  },
}));

export default function Owner({ approve, revoke }) {
  const classes = useStyles();
  const [pub_key, setPubKey] = useState("");
  const [rev_pub_key, setRevPubKey] = useState("");
  const dispatch = useDispatch();

  const universities = useSelector((store) => store.universites.universities);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getuniversites());
    };

    fetchData();
  }, [dispatch]);
  

  const handleApprove = async (event) => {
    event.preventDefault();
    await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("LODU")
    approve(pub_key);
  };

  const handleRevoke = async (event) => {
    event.preventDefault();
    revoke(rev_pub_key);
  };

  const handleGetUniversities = async () => {
    await dispatch(getuniversites());
  };

  const handleCardActionClick = async (university) => {
    const updatedUniversity = {
      ...university,
      isApproved: true,
    };
    await dispatch(updateUniversity(updatedUniversity));
  };

  return (
    <Box className={classes.ownerBody}>
      <div className={classes.formContainer}>
        <Grid container spacing={4}>
          <Grid item xs={9}>
            <form className={classes.form} onSubmit={handleApprove}>
              <Typography className={classes.text} variant="h6">
                Approve University
              </Typography>
              <TextField
                className={classes.input}
                type="text"
                label="Public Key"
                variant="outlined"
                value={pub_key}
                onChange={(event) => setPubKey(event.target.value)}
              />
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                Approve Access
              </Button>
            </form>
            <form className={classes.form} onSubmit={handleRevoke}>
              <Typography className={classes.text} variant="h6">
                Revoke University
              </Typography>
              <TextField
                className={classes.input}
                type="text"
                label="Public Key"
                variant="outlined"
                value={rev_pub_key}
                onChange={(event) => setRevPubKey(event.target.value)}
              />
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                Revoke Access
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleGetUniversities}
              >
                Get Universities
              </Button>
            </form>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.universitiesContainer}>
              {universities.map((university) => (
                <Card className={classes.card} key={university._id}>
                  <CardContent>
                    <Typography variant="h6">
                      {university.UniversityName}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleCardActionClick(university)}
                    >
                      Approve
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
