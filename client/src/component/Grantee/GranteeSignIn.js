import React from "react";
import { Container,Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { GranteeSignIn } from "../../actions/auth";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import bgvideo from "../../images/AjarJaggedClumber.mp4";
import { Link } from "react-router-dom";
import { connect } from "../../functions";
const useStyles = makeStyles((theme) => ({
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

const GranteeSignin = ({ connect }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const account = connect();
    dispatch(GranteeSignIn(account, navigate));
  };

  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm" className={classes.container}>
        <div className={classes.formContainer}>
          <form onSubmit={handleFormSubmit}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link to="/granteeportal" >
                <Button variant="contained" color="primary" type="submit">
                  Sign In
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default GranteeSignin;
