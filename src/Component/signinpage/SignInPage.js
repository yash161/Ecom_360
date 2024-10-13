import React from "react";
// import './App.css';

import "./sigin.css";
function SignInPage() {
  return (
    <div>
      <div
        lang="en"
        data-layout="vertical"
        data-sidebar="dark"
        data-sidebar-size="lg"
        data-preloader="disable"
        data-theme="default"
        data-topbar="light"
        data-bs-theme="light"
      ></div>
      <form>
        <section className="auth-page-wrapper py-5 position-relative d-flex align-items-center justify-content-center min-vh-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11">
                <div className="card mb-0">
                  <div className="row g-0 align-items-center">
                    <div className="col-xxl-5">
                      <div className="card auth-card bg-secondary h-100 border-0 shadow-none d-none d-sm-block mb-0">
                        <div className="card-body py-5 d-flex justify-content-between flex-column">
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
                                    Ecom 360
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
                            <p className="text-white opacity-75 mb-0 mt-3">
                              &copy; {new Date().getFullYear()} Steex. Crafted
                              with <i className="mdi mdi-heart text-danger"></i>{" "}
                              by Themesbrand
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 mx-auto">
                      <div className="card mb-0 border-0 shadow-none mb-0">
                        <div className="card-body p-sm-5 m-lg-4">
                          <div className="text-center mt-5">
                            <h5 className="fs-3xl">Welcome Back</h5>
                            <p className="text-muted">
                              Sign in to continue to Ecom 360.
                            </p>
                          </div>
                          <div className="p-2 mt-5">
                            <form action="https://themesbrand.com/steex/layouts/index.html">
                              <div className="mb-3">
                                <label
                                  htmlFor="username"
                                  className="form-label"
                                >
                                  Username{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <div className="position-relative">
                                  <input
                                    type="text"
                                    className="form-control password-input"
                                    id="username"
                                    placeholder="Enter username"
                                    required
                                  />
                                </div>
                              </div>

                              <div className="mb-3">
                                <div className="float-end">
                                  <a
                                    href="auth-pass-reset.html"
                                    className="text-muted"
                                  >
                                    Forgot password?
                                  </a>
                                </div>
                                <label
                                  className="form-label"
                                  htmlFor="password-input"
                                >
                                  Password{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                  <input
                                    type="password"
                                    className="form-control pe-5 password-input "
                                    placeholder="Enter password"
                                    id="password-input"
                                    required
                                  />
                                  <button
                                    className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                    type="button"
                                    id="password-addon"
                                  >
                                    <i className="ri-eye-fill align-middle"></i>
                                  </button>
                                </div>
                              </div>

                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="auth-remember-check"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="auth-remember-check"
                                >
                                  Remember me
                                </label>
                              </div>

                              <div className="mt-4">
                                <button
                                  className="btn btn-primary w-100"
                                  type="submit"
                                >
                                  Sign In
                                </button>
                              </div>

                              <div className="mt-4 pt-2 text-center">
                                <div className="signin-other-title position-relative">
                                  <h5 className="fs-sm mb-4 title">
                                    Sign In with
                                  </h5>
                                </div>
                                <div className="pt-2 hstack gap-2 justify-content-center">
                                  <button
                                    type="button"
                                    className="btn btn-subtle-primary btn-icon"
                                  >
                                    <i className="ri-facebook-fill fs-lg"></i>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-subtle-danger btn-icon"
                                  >
                                    <i className="ri-google-fill fs-lg"></i>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-subtle-dark btn-icon"
                                  >
                                    <i className="ri-github-fill fs-lg"></i>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-subtle-info btn-icon"
                                  >
                                    <i className="ri-twitter-fill fs-lg"></i>
                                  </button>
                                </div>
                              </div>
                            </form>

                            <div className="text-center mt-5">
                              <p className="mb-0">
                                Don't have an account?{" "}
                                <a
                                  href="auth-signup.html"
                                  className="fw-semibold text-secondary text-decoration-underline"
                                >
                                  SignUp
                                </a>
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
          </div>
        </section>
      </form>
    </div>
  );
}

export default SignInPage;
