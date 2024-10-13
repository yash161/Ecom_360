import React from 'react';
function PassReset() {
    return (
        <>

            <section class="auth-page-wrapper py-5 position-relative d-flex align-items-center justify-content-center min-vh-100">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-11">
                            <div class="card mb-0">
                                <div class="row g-0 align-items-center">
                                    <div class="col-xxl-5">
                                        <div class="card auth-card bg-secondary h-100 border-0 shadow-none d-none d-sm-block mb-0">
                                            <div class="card-body py-5 d-flex justify-content-between flex-column h-100">
                                                <div class="text-center">
                                                    <h3 class="text-white">Start your journey with us.</h3>
                                                    <p class="text-white opacity-75 fs-base">It brings together your tasks, projects, timelines, files and more</p>
                                                </div>

                                                <div class="auth-effect-main my-5 position-relative rounded-circle d-flex align-items-center justify-content-center mx-auto">
                                                    <div class="effect-circle-1 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                                        <div class="effect-circle-2 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center">
                                                            <div class="effect-circle-3 mx-auto rounded-circle position-relative text-white fs-4xl d-flex align-items-center justify-content-center">
                                                                Welcome to <span class="text-primary ms-1">Ecom360</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul class="auth-user-list list-unstyled">
                                                        <li>
                                                            <div class="avatar-sm d-inline-block">
                                                                <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                                    <img src="assets/images/users/avatar-1.jpg" alt="" class="img-fluid"/>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="avatar-sm d-inline-block">
                                                                <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                                    <img src="assets/images/users/avatar-2.jpg" alt="" class="img-fluid"/>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="avatar-sm d-inline-block">
                                                                <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                                    <img src="assets/images/users/avatar-3.jpg" alt="" class="img-fluid"/>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="avatar-sm d-inline-block">
                                                                <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                                    <img src="assets/images/users/avatar-4.jpg" alt="" class="img-fluid"/>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="avatar-sm d-inline-block">
                                                                <div class="avatar-title bg-white shadow-lg overflow-hidden rounded-circle">
                                                                    <img src="assets/images/users/avatar-5.jpg" alt="" class="img-fluid"/>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div class="text-center">
                                                    <p class="text-white opacity-75 mb-0 mt-3">
                                                      
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-xxl-6 mx-auto">
                                        <div class="card mb-0 border-0 shadow-none mb-0">
                                            <div class="card-body p-sm-5 m-lg-4">
                                                <div class="text-center mt-2">
                                                    <h5 class="fs-3xl">Forgot Password?</h5>
                                                    <p class="text-muted mb-4">Reset password with Ecom360</p>
                                                    <div class="pb-4">
                                                        <img src="assets/images/auth/email.png" alt="" class="avatar-md"/>
                                                    </div>
                                                </div>

                                                <div class="alert border-0 alert-warning text-center mb-2 mx-2" role="alert">
                                                    Enter your email and instructions will be sent to you!
                                                </div>
                                                <div class="p-2">
                                                    <form>
                                                        <div class="mb-4">
                                                            <label class="form-label">Email</label>
                                                            <input type="email" class="form-control password-input" id="email" placeholder="Enter Email" required/>
                                                        </div>

                                                        <div class="text-center mt-4">
                                                            <button class="btn btn-primary w-100" type="submit">Send Reset Link</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="mt-4 text-center">
                                                    <p class="mb-0">Wait, I remember my password... <a href="auth-signin.html" class="fw-semibold text-primary text-decoration-underline"> Click here </a> </p>
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

            
            <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/libs/simplebar/simplebar.min.js"></script>
            <script src="assets/js/plugins.js"></script>
        </>
    );
}

export default PassReset;