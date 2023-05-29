import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { loadWeb3, signMessage, loadContract, connect } from './utils/web3_func';
import Owner from "./component/Owner";
import UniversitySignUp from "./component/UniversitySignUp";
import UniversityPortal from "./component/UniversityPortal";
import { useState, useEffect } from "react";
import Home from "./component/Home";
import lighthouse from "@lighthouse-web3/sdk";
import axios from "axios";
function App() {
  const [account, setAccount] = useState([]);
  const [certificate, setcertificate] = useState(null);
  const [ifUniLogin, setifUniLogin] = useState(false);
  const [meta_data, setmeta_data] = useState("okk");
  const message = "Joshi hai God";
  useEffect(() => {
    // Call the loadWeb3 function
    loadWeb3();

    // Call the loadContract function
    loadContract();

    // Call the signMessage function
    signMessage();

    // Call the connect function
    connect();
  }, []);

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    const output = await lighthouse.uploadText(
      meta_data,
      "0040bebe.ece4300144684570902bf7ac1c02de92",
      "Data",
      progressCallback
    );
    console.log("File Status:", output);
    /*
      output:
        data: {
          Name: "filename.txt",
          Size: 88000,
          Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
        }
      Note: Hash in response is CID.
    */

    console.log(
      "Visit at https://gateway.lighthouse.storage/ipfs/" + output.data.Hash
    );
  };
  const getApiKey = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const verificationMessage = (
      await axios.get(
        `https://api.lighthouse.storage/api/auth/get_message?publicKey=${account}`
      )
    ).data;
    const signedMessage = await signMessage(verificationMessage);
    const response = await lighthouse.getApiKey(account, signedMessage);
    console.log(response);
    /* { data: { apiKey: '7d8f3d18.eda91521aa294773a8201d2a7d241a2c' } } */
  };
  const mint_certificate = async (name, program, holder_key) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + "/" + mm + "/" + yyyy;
    console.log(today);
    if (name !== "" && program !== "" && holder_key !== 0) {
      const ok = await certificate.methods
        .mintCertificate(name, today, program, holder_key)
        .send({ from: account })
        .on("transactionHash", function (hash) {
          console.log("University Approved Successfully");
        });
        console.log("ok ki value next");
        console.log(ok);
      const result = await certificate.methods
        .getOwnerOfCertificate(1)
        .send({ from: account })
        .on("transactionHash", function (hash) {
          console.log("Owner of the NFT is");
        });
        console.log("yeh wala dusra hai ")
      console.log(result);
    }
  };
 
  const approve = async (university_pub_key) => {
    await certificate.methods
      .approveUniversity(university_pub_key)
      .send({ from: account })
      .on("transactionHash", function (hash) {
        console.log("University Approved Successfully");
        console.log(hash);
      });
  };

  const revoke = async (university_pub_key) => {
    await certificate.methods
      .revokeUniversity(university_pub_key)
      .send({ from: account })
      .on("transactionHash", function (hash) {
        console.log("University Revoked Successfully");
        console.log(hash);
      });
  };

  return (
    <>
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
          {ifUniLogin ? (
            <Route
              path="/university"
              element={<UniversityPortal mint_certificate={mint_certificate} />}
            ></Route>
          ) : (
            <Route
              path="/university"
              element={
                <UniversitySignUp connect={connect} signMessage={signMessage} />
              }
            ></Route>
          )}
        </Routes>
      </Router>
      <form onSubmit={uploadFile}>
        <input
          type="text"
          value={meta_data}
          onChange={(e) => setmeta_data(e.target.value)}
        />
        <button className="btn btn-danger" type="submit">
          ClickME
        </button>
      </form>
      <button className="btn btn-dark" onClick={getApiKey}>
        GET API
      </button>
    </>
  );
}

export default App;
