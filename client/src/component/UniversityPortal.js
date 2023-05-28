import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/University.css";
export default function UniversityPortal({ mint_certificate }) {
  const [name, setname] = useState("");
  const [program, setprogram] = useState("");
  const [holder_key, setholder_key] = useState(0x0000);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await mint_certificate(name, program, holder_key);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="university-body">
          <div className="form-body">
            <form className="form-inline" onSubmit={handleSubmit}>
              <h6 className="mr-4">Name :</h6>
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control mr-4"
                  id="staticEmail2"
                  value={name}
                  onChange={(event) => setname(event.target.value)}
                />
              </div>
              <br />
              <h6 className="revoke">Program of Study</h6>
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control mr-4"
                  id="staticEmail2"
                  value={program}
                  onChange={(event) => setprogram(event.target.value)}
                />
              </div>
              <br />
              <h6 className="revoke">Public Address :</h6>
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control mr-4"
                  id="staticEmail2"
                  value={holder_key}
                  onChange={(event) => setholder_key(event.target.value)}
                />
              </div>
              <br />
              <button type="submit" className="btn btn-primary mb-2">
                Mint Certificate
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
