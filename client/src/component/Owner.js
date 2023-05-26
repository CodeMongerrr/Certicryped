import React from "react";
import '../CSS/Owner.css'
import { useState } from "react";


export default function Owner({approve, revoke}) {
  const [pub_key, setpub_key] = useState("");
  const [rev_pub_key, setrev_pub_key] = useState("");
  const handle_approve = async (event) =>{
    event.preventDefault();
    console.log(pub_key);
    await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    approve(pub_key);
  }
  const handle_revoke = async (event) => {
    event.preventDefault();
    revoke(rev_pub_key);
  }
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="owner-body">
          <div className="form-body">
            <form className="form-inline" onSubmit={handle_approve}>
              <h6 className="mr-4">Approve University</h6>
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control mr-4"
                  id="staticEmail2"
                  value={pub_key}
                  onChange={(event) => setpub_key(event.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2">
                Approve Access
              </button>
            </form>
            <form className="form-inline" onSubmit={handle_revoke}>
              <h6 className="revoke">Revoke University</h6>
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control mr-4"
                  id="staticEmail2"
                  value={rev_pub_key}
                  onChange={(event) => setrev_pub_key(event.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2">
                Revoke Access
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
