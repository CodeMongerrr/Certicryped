import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "black",
    boxShadow: "none",
    position: "sticky",
    top: 0,
    // border: "1px solid white",
    width: "100%",
  },
  navbarBrand: {
    textDecoration: "none",
    maxWidth: "1000",
    color: "#fff",
    marginRight: theme.spacing(4),
    fontWeight: "bold",
    fontFamily: "Oswald", // Add your special font here
    "&:hover": {
      color: "#ff9800",
    },
  },
  navLink: {
    marginRight: theme.spacing(4),
    "&:last-child": {
      marginRight: 0,
    },
  },
  navLinkText: {
    color: "#fff",
    fontSize: "1.3rem",
    textDecoration: "none",
    fontWeight: "bold", // Make the text bolder
    fontFamily: "Oswald", // Add your special font here
    "&:hover": {
      color: "#ff9800",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
  leftSection: {
    float: "left",
    display: "flex",
    flex: "1",
    alignItems: "center",
  },
  rightSection: {
    paddingLeft: "60px",
    flex: "3",
    display: "flex",
    alignItems: "center",
  },
  logoutButton: {
    color: "#fff",
    fontSize: "1rem",
    textTransform: "none",
    fontWeight: "bold",
    fontFamily: "YourSpecialFont", // Add your special font here
    "&:hover": {
      color: "#ff9800",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT", data: null });
    window.location.reload();
  };

  const ownerProfile = localStorage.getItem("OwnerProfile");
  const universityProfile = localStorage.getItem("Universityprofile");

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <div className={classes.leftSection}>
              <Typography
                variant="h5"
                component={Link}
                to="/"
                className={classes.navbarBrand}
              >
                Certicryp
              </Typography>
            </div>

            <div className={classes.rightSection}>
              {!ownerProfile && !universityProfile ? (
                <>
                  <Link to="/owner" className={classes.navLink}>
                    <Typography
                      variant="h6"
                      component="span"
                      className={classes.navLinkText}
                    >
                      Owner Login
                    </Typography>
                  </Link>
                  <Link to="/university" className={classes.navLink}>
                    <Typography
                      variant="h6"
                      component="span"
                      className={classes.navLinkText}
                    >
                      University
                    </Typography>
                  </Link>
                  <Link to="/grantee" className={classes.navLink}>
                    <Typography
                      variant="h6"
                      component="span"
                      className={classes.navLinkText}
                    >
                      Certificate Holder Login
                    </Typography>
                  </Link>
                </>
              ) : (
                <Button
                  color="inherit"
                  onClick={handleLogout}
                  className={classes.logoutButton}
                >
                  Logout
                </Button>
              )}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
