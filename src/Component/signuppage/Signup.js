import React, { useState } from "react";
import axios from "axios";
function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      useremail: email,
      username: username,
      "password-input": password,
    };

    axios
      .post("http://localhost:8000/reg", formData) // Update the URL to your Node.js endpoint
      .then((response) => {
        console.log("Data inserted successfully!");
        // Handle the successful response here
      })
      .catch((error) => {
        console.log("Error inserting data into the table!");
        console.log(error);
        // Handle the error response here
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="auth-page-wrapper py-5 position-relative d-flex align-items-center justify-content-center min-vh-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11">
                <div className="card mb-0">
                  <div className="row g-0 align-items-center">
                    <div className="col-xxl-5">
                      <div className="card auth-card bg-secondary h-100 border-0 shadow-none d-none d-sm-block mb-0">
                        <div className="card-body py-5 d-flex justify-content-between flex-column h-100">
                          <div className="text-center">
                            <h3 className="text-white">
                              Start your journey with us.
                            </h3>
                            <p className="text-white opacity-75 fs-base">
                              It brings together your tasks, projects,
                              timelines, files and more
                            </p>
                          </div>

                          <div className="auth-effect-main my-5 position-relative rounded-circle d-flex align-items-center justify-content-center mx-auto">
                            <div className="effect-circle-1 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center">
                              <div className="effect-circle-2 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                <div className="effect-circle-3 mx-auto rounded-circle position-relative text-white fs-4xl d-flex align-items-center justify-content-center">
                                  Welcome to{" "}
                                  <span className="text-primary ms-1">
                                    Ecom360
                                  </span>
                                </div>
                              </div>
                            </div>
                            <ul className="auth-user-list list-unstyled">
                              <li>
                                <div className="avatar-sm d-inline-block">
                                  <div className="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                    <img
                                      src="assets/images/users/avatar-1.jpg"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="avatar-sm d-inline-block">
                                  <div className="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                    <img
                                      src="assets/images/users/avatar-2.jpg"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="avatar-sm d-inline-block">
                                  <div className="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                    <img
                                      src="assets/images/users/avatar-3.jpg"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="avatar-sm d-inline-block">
                                  <div className="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                    <img
                                      src="assets/images/users/avatar-4.jpg"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="avatar-sm d-inline-block">
                                  <div className="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                    <img
                                      src="assets/images/users/avatar-5.jpg"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div className="text-center">
                            <p className="text-white opacity-75 mb-0 mt-3"></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-6 mx-auto">
                      <div className="card mb-0 border-0 shadow-none mb-0">
                        <div className="card-body p-sm-5 m-lg-4">
                          <div className="text-center mt-2">
                            <h5 className="fs-3xl">Create your free account</h5>
                            <p className="text-muted">
                              Get your free account Open Ecom360 now
                            </p>
                          </div>
                          <div className="p-2 mt-5">
                            <div className="mb-3">
                              <label htmlFor="useremail" className="form-label">
                                Email <span className="text-danger">*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="useremail"
                                placeholder="Enter email address"
                                name="useremail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please enter email
                              </div>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="username" className="form-label">
                                Username <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Enter username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                              />
                              <div className="invalid-feedback">
                                Please enter username
                              </div>
                            </div>

                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="password-input"
                              >
                                Password <span className="text-danger">*</span>
                              </label>
                              <div className="position-relative auth-pass-inputgroup">
                                <input
                                  type="password"
                                  className="form-control password-input pe-5"
                                  onPaste={(e) => e.preventDefault()}
                                  placeholder="Enter password"
                                  id="password-input"
                                  name="password-input"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                  required
                                />
                                <button
                                  className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                  type="button"
                                  id="password-addon"
                                >
                                  <i className="ri-eye-fill align-middle"></i>
                                </button>
                                <div className="invalid-feedback">
                                  Please enter password
                                </div>
                              </div>
                            </div>

                            <div className="mb-4">
                              <p className="mb-0 fs-xs text-muted fst-italic">
                                By registering you agree to the Steex{" "}
                                <a
                                  href="pages-term-conditions.html"
                                  className="text-primary text-decoration-underline fst-normal fw-medium"
                                >
                                  Terms of Use
                                </a>
                              </p>
                            </div>

                            <div
                              id="password-contain"
                              className="p-3 bg-light mb-2 rounded"
                            >
                              <h5 className="fs-sm">Password must contain:</h5>
                              <p
                                id="pass-length"
                                className="invalid fs-xs mb-2"
                              >
                                Minimum <b>8 characters</b>
                              </p>
                              <p id="pass-lower" className="invalid fs-xs mb-2">
                                At <b>lowercase</b> letter (a-z)
                              </p>
                              <p id="pass-upper" className="invalid fs-xs mb-2">
                                At least <b>uppercase</b> letter (A-Z)
                              </p>
                              <p
                                id="pass-number"
                                className="invalid fs-xs mb-0"
                              >
                                A least <b>number</b> (0-9)
                              </p>
                            </div>

                            <div className="mt-4">
                              <button
                                className="btn btn-primary w-100"
                                type="submit"
                              >
                                Sign Up
                              </button>
                            </div>

                            <div className="mt-4 text-center">
                              <div className="signin-other-title position-relative">
                                <h5 className="fs-sm mb-4 title text-muted">
                                  Create account with
                                </h5>
                              </div>

                              <div>
                                <button
                                  type="button"
                                  className="btn btn-subtle-primary btn-icon "
                                >
                                  <i className="ri-facebook-fill fs-lg"></i>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-subtle-danger btn-icon "
                                >
                                  <i className="ri-google-fill fs-lg"></i>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-subtle-dark btn-icon "
                                >
                                  <i className="ri-github-fill fs-lg"></i>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-subtle-info btn-icon "
                                >
                                  <i className="ri-twitter-fill fs-lg"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 text-center">
                            <p className="mb-0">
                              Already have an account ?{" "}
                              <a
                                href="auth-signin.html"
                                className="fw-semibold text-primary text-decoration-underline"
                              >
                                {" "}
                                Signin{" "}
                              </a>{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}

export default Signup;
