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
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x539" }], // chainId must be in hexadecimal numbers
      });
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x61" }], // chainId must be in hexadecimal numbers
      });
    } else {
      window.alert("Non Ethereum browser detected");
    }
  };

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

  // const uploadFile = async (e) => {
  //   e.preventDefault();
  //   const output = await lighthouse.uploadText(
  //     meta_data,
  //     "0040bebe.ece4300144684570902bf7ac1c02de92",
  //     "Data",
  //     progressCallback
  //   );
  //   console.log("File Status:", output);
    
  //   console.log(
  //     "Visit at https://gateway.lighthouse.storage/ipfs/" + output.data.Hash
  //   );
  // };
  // const getApiKey = async () => {
  //   const web3 = window.web3;
  //   const accounts = await web3.eth.getAccounts();
  //   const account = accounts[0];
  //   const verificationMessage = (
  //     await axios.get(
  //       `https://api.lighthouse.storage/api/auth/get_message?publicKey=${account}`
  //     )
  //   ).data;
  //   const signedMessage = await signMessage(verificationMessage);
  //   const response = await lighthouse.getApiKey(account, signedMessage);
  //   console.log(response);
  //   /* { data: { apiKey: '7d8f3d18.eda91521aa294773a8201d2a7d241a2c' } } */
  // };
  const userdata = {
    name: "Aditya Roshan Joshi",
    program: "Blockchain",
    position: "Developer"
  }
  const uploadFile = async(event) => {
    event.preventDefault();
    const response = await fetch("/api/cid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    });
    console.log(response);
  }
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
      console.log("yeh wala dusra hai ");
      console.log(result);
    }
  };
  const connect = async (event) => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    const signature = await signMessage(message, account);
    console.log(signature)
    const counter_account = await web3.eth.personal.ecRecover(
      message,
      signature
    );
    let data = {
      public_key: counter_account,
    };
    console.log(counter_account);
    const response = await fetch("/api/account_exists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    if (account.toLowerCase() === counter_account) {
      setifUniLogin(true);
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
      <button className="btn btn-dark" >
        GET API
      </button>
    </>
  );
}

export default App;
