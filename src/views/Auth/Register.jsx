import React from "react";

const Register = () => {
  return (
    <>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="">
              <div className="card text-black" style={{ borderRadius: "8px " }}>
                <div className="card-body p-md-1">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-1 mx-1 mx-md-2 mt-4">
                        Buyer's Register
                      </p>

                      <form className="mx-1 mx-md-1">
                        <div className="d-flex flex-row align-items-center mb-1">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="first_name"
                              className="form-control"
                              required
                            />
                            <label className="form-label " htmlFor="first_name">
                              First Name*
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-1">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="last_name"
                              className="form-control"
                              required
                            />
                            <label className="form-label" htmlFor="last_name">
                              Last Name*
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-1">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              required
                            />
                            <label className="form-label" htmlFor="email">
                              Your Email*
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-1">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              required
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password*
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-1">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              required
                            />
                            <label className="password" htmlFor="password">
                              Repeat your password*
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-1">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="tel"
                              id="phone_number"
                              className="form-control"
                              required
                            />
                            <label
                              className="form-label"
                              htmlFor="phone_number"
                            >
                              Phone Number*
                            </label>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-1">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="confirm"
                            required
                          />
                          <label className="form-check-label" htmlFor="confirm">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-left mx-4 mb-1 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>

                          <a href="#!" className="px-3 mb-6">
                            Already have an account ?
                          </a>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
