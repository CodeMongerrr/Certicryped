import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Owner from "./component/Owner/Owner";
import UniversitySignUp from "./component/University/UniversitySignUp";
import UniversityPortal from "./component/University/UniversityPortal";
import Web3 from "web3";
import { useState, useEffect } from "react";
import Home from "./component/Home";
import UniversityPortalRahil from "./component/University/UniversityPortalRahil";
import lighthouse, { upload } from "@lighthouse-web3/sdk";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import GetApi from "./component/GetApi";
import UniversityAuth from "./component/University/UniversityAuth";
import University from "./component/University/University";
import Grantee from "./component/Grantee/Grantee";
import GranteePortal from "./component/Grantee/GranteePortal";
import { Button } from "@material-ui/core";
import { loadWeb3, signMessage, loadContract, progressCallback, uploadFile, retrieve, getApiKey, userdata, mintCertificate, connect, approve, get_ids_of_owner, getNFTs, revoke } from './functions';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    width: "100vw",
  },
}));
function App() {
  const classes = useStyles();
  const url = "";
  useEffect(() => {
    loadWeb3();
    loadContract();
  }, []);
  return (
    <div className={classes.root}>
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/owner"
            element={<Owner approve={approve} revoke={revoke} />}
          ></Route>
          <Route
            path="/university"
            element={
              <University
                uploadFile={uploadFile}
                mintCertificate={mintCertificate}
                connect={connect}
                signMessage={signMessage}
                get_ids_of_owner={get_ids_of_owner}
              />
            }
          ></Route>
          <Route
            path="/grantee"
            element={<Grantee connect={connect} />}
          ></Route>
          <Route path="/granteeportal" element={<GranteePortal get_ids_of_owner={get_ids_of_owner} getNFTs={getNFTs} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
