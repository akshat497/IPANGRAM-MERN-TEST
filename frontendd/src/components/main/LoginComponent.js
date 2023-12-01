import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import Header from "../common/Header";
import { loginUser } from "../../redux/auth/authThunk";



export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);
 

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.login.loading);
  const response = useSelector((state) => state.login.user);
  const error = useSelector((state) => state.login.error);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
useEffect(()=>{
if(response?.success===true){
  navigate('/homepage')
}
},[response])
  const handleLogin = () => {
    if (email && password) {
      const body = {
        email: email,
        password: password,
      };
      if (rememberMe) {
        // Store email and password in local storage
        localStorage.setItem("rememberedEmail", email);
        localStorage.setItem("rememberedPassword", password);
      }
      dispatch(loginUser
      (body));
    } else {
      // Display an error message or handle the case where fields are not filled.
      toast.warn("Please fill in both email and password fields.");
    }
  };
  // useEffect(() => {
  //   // console.log(restroDetails)
  //   if (restroDetails?.role === "fenchise") {
  //     if (response !== null && response !== undefined) {
  //       navigate("/admin/");
  //     }
  //   } else {
  //     if (restroDetails?.role === "superadmin") {
  //       navigate("/superadmin/");
  //     }
  //   }
  // }, [response, restroDetails]);
  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    const storedPassword = localStorage.getItem("rememberedPassword");

    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
    }
  }, []);

  return (
    <>
      {loading ? <div className="overlay"></div> : null}
    <Header/>
     
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <section
          className="card mb-3"
          style={{
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            width: "70%",
            height: "60vh",
            display: "flex",
          }}
        >
          <div className="row g-0 d-flex align-items-center">
            <div className="col-lg-4 d-none d-lg-flex">
              <img
                src="https://img.freepik.com/free-vector/my-password-concept-illustration_114360-4294.jpg?size=626&ext=jpg&ga=GA1.1.480076137.1690472873&semt=ais"
                alt="Trendy Pants and Shoes"
                className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
                height="390vh"
              />
            </div>
            <div className="col-lg-8">
              <div className="card-body py-5 px-md-5">
                <form>
                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example1"
                      className="form-control"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <label className="form-label" htmlFor="form2Example1">
                      Email address
                    </label>
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example2"
                      className="form-control"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <label className="form-label" htmlFor="form2Example2">
                      Password
                    </label>
                  </div>
                  {/* 2 column grid layout for inline styling */}
                  <div className=" d-flex justify-content-between my-3">
                    <div className=" ">
                      {/* Checkbox */}
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="form2Example31"
                          onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example31"
                        >
                          
                          Remember me{" "}
                        </label>
                      </div>
                    </div>
                    <Link
                        
                        style={{ textDecoration: "none", color: "purple" }}
                        data-bs-toggle="modal" data-bs-target="#forgetpassword"
                      >
                    <div className=" mt-2">
                      {/* Simple link */}
                     
                        Forgot password?
                     
                    </div>
                    </Link>
                  </div>
                  {/* Submit button */}
                  <button
                    type="button"
                    className="btn btn-primary btn-block mb-4 "
                    style={{ backgroundColor: "purple", borderRadius: "10px" }}
                    onClick={handleLogin}
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign in"}
                  </button>

                  {error !== null && (
                    <div
                      className="alert alert-danger mx-1"
                      role="alert"
                      id="alertBox"
                    >
                      <b className="mr-4">
                        <FaExclamationTriangle /> Error:{" "}
                        {error?.response?.data?.message}
                      </b>
                      {/* <button type="button" className="btn-close ml-4" data-bs-dismiss="alert" aria-label="Close"></button> */}
                    </div>
                  )}
                  {/* { console.log(error)}    */}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
   
    </>
  );
}
