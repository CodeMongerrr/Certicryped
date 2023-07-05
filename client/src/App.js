import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Owner from "./component/Owner/Owner";
import { useEffect } from "react";
import Home from "./component/Home";
import { makeStyles } from "@material-ui/core/styles";
import University from "./component/University/University";
import Grantee from "./component/Grantee/Grantee";
import GranteePortal from "./component/Grantee/GranteePortal";
import { loadWeb3, signMessage, loadContract, uploadFile, mintCertificate, connect, approve, get_ids_of_owner, getNFTs, revoke } from './functions';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    width: "100vw",
  },
}));
function App() {
  const classes = useStyles();
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
