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
  },
  navbarBrand: {
    textDecoration: "none",
    color: "#fff",
    marginRight: theme.spacing(4),
    fontWeight: "bold",
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
    // border: "1px solid white",
    fontSize: "1.2rem",
    textDecoration: "none",
    "&:hover": {
      color: "#ff9800",
    },
  },
  toolbar:{
    display: "flex",
    justifyContent: "center",
  },
  leftSection: {
    // border: "1px solid white",

    display: "flex",
    flex: "1",
    alignItems: "center",
  },
  rightSection: {
    // border: "1px solid white",
    flex: "3",
    display: "flex",
    alignItems: "center",
  },
  logoutButton: {
    color: "#fff",
    fontSize: "1rem",
    textTransform: "none",
    fontWeight: "bold",
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
