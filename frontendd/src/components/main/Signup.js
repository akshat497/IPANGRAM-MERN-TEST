import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { signupUser } from "../../redux/auth/authThunk";
import Header from "../common/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowLeft, FaArrowRight, FaExclamationTriangle } from "react-icons/fa";

export default function Signup() {
  const dispatch=useDispatch()
  const loading = useSelector((state) => state.auth.loading);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    role: "employees",
    password: "",
    confirmPassword: "",
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const Registeruser = async () => {
    // Check if any field is empty

    if (
      !formData.email ||
      !formData.name ||
      !formData.phone ||
      !formData.address ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.warn("Field missing!");
      return;
    }

    // Check if the password meets the complexity requirements
    // const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // if (!passwordRegex.test(formData.password)) {
    //   toast.warn("Password should contain at least one uppercase letter, one numeric digit, and one special character.");
    //   return;
    // }

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      toast.warn("Password and confirm password do not match.");
      return;
    }
    const body = {
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      location: formData.address,
      role: formData.role,
      password: formData.password,
    };
    dispatch(signupUser(body));
    // dispatch(verifyOtp(formData))
    // All validation checks passed, you can now proceed with registration
  };
  const calculatePasswordStrength = (password) => {
    // Define your criteria here
    const lengthScore = password.length >= 8 ? 2 : 0;
    const uppercaseScore = /[A-Z]/.test(password) ? 2 : 0;
    const lowercaseScore = /[a-z]/.test(password) ? 2 : 0;
    const digitScore = /[0-9]/.test(password) ? 2 : 0;
    const specialCharScore = /[@$!%*?&]/.test(password) ? 2 : 0;

    const totalScore =
      lengthScore +
      uppercaseScore +
      lowercaseScore +
      digitScore +
      specialCharScore;

    // Normalize the score to a percentage
    const maxScore = 10; // Adjust this as needed
    return (totalScore / maxScore) * 100;
  };
  useEffect(() => {
    const passwordScore = calculatePasswordStrength(formData.password);
    setPasswordStrength(passwordScore);
  }, [formData]);
  return (
    <>
    <Header/>
    
      <div
        className="container d-flex flex-column justify-content-center align-items-center vh-100"
        style={{ minHeight: "100vh" }}
      >
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
          {/* Form section */}
          <div className="row g-0 d-flex align-items-center">
            <div className="col-lg-4 d-none d-lg-flex">
              <img
                src="https://img.freepik.com/free-vector/personal-settings-concept-illustration_114360-2659.jpg?size=626&ext=jpg"
                alt="Trendy Pants and Shoes"
                className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
                height="390vh"
              />
            </div>
            <div className="col-lg-8" style={{ marginTop: "" }}>
              <div className="card-body ">
                {/* Render different form sections based on the current step */}
                {step === 0 && (
                  <div className="col-lg-12">
                    <form onSubmit={handleSubmit}>
                      {/* Restaurant Name input */}
                      <div className="form-outline my-4">
                        {/* <label className="form-label" htmlFor="restaurantName">
                        Restaurant Name
                      </label> */}
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Name"
                        />
                      </div>
                      {/* Email input */}
                      <div className="form-outline my-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder=" Email address"
                        />
                        {/* <label className="form-label" htmlFor="email">
                        Email address
                      </label> */}
                      </div>
                      {/* Phone Number input */}
                      <div className="form-outline my-4">
                        <input
                          type="tel"
                          id="phoneNumber"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                        />
                        {/* <label className="form-label" htmlFor="phoneNumber">
                        Phone Number
                      </label> */}
                      </div>
                    </form>
                  </div>
                )}

                {step === 1 && (
                <div className="col-lg-12">
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="address"
                        className="form-control mb-4"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                        
                      />
                        <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="password"
                      />
                      {/* <label className="form-label" htmlFor="password">
                        Password
                      </label> */}
                               {/* Password strength indicator */}
                               <div className="password-strength-indicator">
                        
                          <progress
                            max="100"
                            value={passwordStrength}
                            style={{
                              width: "100%",
                              height: "10px",
                              border: "none",
                              borderRadius: "5px",
                              backgroundColor: "#ddd",
                            }}
                          />
                          <span className="password-strength-label">
                            {passwordStrength === 0
                              ? "Weak"
                              : passwordStrength < 50
                              ? "Weak"
                              : passwordStrength < 70
                              ? "Moderate"
                              : passwordStrength < 90
                              ? "Strong"
                              : "Very Strong"}
                          </span>
                        </div>
                    </div>
                    {/* Confirm Password input */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="confirmPassword"
                        className="form-control"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="confirmPassword"
                      />
                      {/* <label className="form-label" htmlFor="confirmPassword">
                        Confirm Password
                      </label> */}
                    </div>
                    <div className="form-check form-check-inline m-4">
                    Role: 
      <input
        className="form-check-input ml-5 "
        type="radio"
        name="role"
        id="managerRole"
        value="manager"
        checked={formData.role === 'manager'}
        onChange={handleChange}
      />
      <label className="form-check-label mr-5" htmlFor="managerRole">
        Manager
      </label>
    </div>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input ml-5"
        type="radio"
        name="role"
        id="employeeRole"
        value="employee"
        checked={formData.role === 'employee'}
        onChange={handleChange}
      />
      <label className="form-check-label " htmlFor="employeeRole">
        Employee
      </label>
    </div>
                      {/* <label className="form-label" htmlFor="pincode">
                        Pincode
                      </label> */}
                    </div>
                    <div className="col-lg-12">
                  <form onSubmit={handleSubmit}>
                    {/* Password input */}
                  
                  
                 
           {/* { console.log(error)}   */}
                  </form>
                  
                </div>
                    {/* <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handlePrevious}
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        className="btn "
                        onClick={handleNext}
                        style={{
                          backgroundColor: "#CBC3E3",
                          color: "white",
                          transition: "background-color 0.3s",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = "#DA70D6";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = "#CBC3E3";
                        }}
                      >
                        Next
                      </button>
                    </div> */}
       
                  </form>
                </div>
              )}
              </div>
            </div>
          </div>

          <div></div>
          <div style={{ width: "60%", marginLeft: "39%" }}>
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handlePrevious}
                disabled={step === 0}
              >
                <FaArrowLeft/>
              </button>
              {step !== 1 && (
                <button
                  type="button"
                  className="btn  "
                  onClick={handleNext}
                  style={{
                    backgroundColor: "#CBC3E3",
                    color: "white",
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#DA70D6";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#CBC3E3";
                  }}
                >
               <FaArrowRight/>
                </button>
              )}

              {step === 1 && (
                <button
                  type="submit"
                  className={"btn btn-primary"}
                  style={{ backgroundColor: "purple", color: "white" }}
                  onClick={Registeruser}
                  disabled={loading}
                >
                  {loading ? "Signing up..." : "Sign Up"}
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
