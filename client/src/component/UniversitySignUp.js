import React, { useState } from "react";
export default function UniversitySignUp({ connect, signMessage }) {
  const [unicreds, setunicreds] = useState({
    name: "",
    email: "",
    pub_key: "",
    password: "",
  });
  const handleSignUp = async (event) => {
    event.preventDefault();
    let userdata = {
      name: unicreds.name,
      email: unicreds.email,
      pub_key: unicreds.pub_key.toLowerCase(),
      password: unicreds.password,
    };

    const response = await fetch("/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    });
    console.log(response);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    connect();
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="university-body">
          <div className="form-body">
            <form onSubmit={handleSignUp}>
              <div className="mb-3 ">
                <label htmlFor="" className="form-label">
                  University Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="University Name"
                  value={unicreds.name}
                  onChange={(e) =>
                    setunicreds({ ...unicreds, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Email Id
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail"
                  value={unicreds.email}
                  onChange={(e) =>
                    setunicreds({
                      ...unicreds,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="public_key" className="revoke">
                  Public Key<>(Account with which you will mint)</>
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="Public Key"
                  value={unicreds.pub_key}
                  onChange={(e) =>
                    setunicreds({
                      ...unicreds,
                      pub_key: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="revoke">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  aria-describedby="password"
                  value={unicreds.password}
                  onChange={(e) =>
                    setunicreds({
                      ...unicreds,
                      password: e.target.value,
                    })
                  }
                />
              </div>

              <button type="submit" className="btn btn-primary mr-3" id="uls">
                Sign Up
              </button>
            </form>
            <form onSubmit={handleLogin}>
              <button type="submit" className="btn btn-danger" id="ull">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
