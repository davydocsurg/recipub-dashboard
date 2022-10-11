import React from "react";
import Label from "../../commons/form/Label";
import Input from "../../commons/form/Input";

const Register = ({
  labelFor,
  type,
  placeholder,
  style,
  value,
  disabled,
  required,
  name,
  id,
  error,
}) => {
  return (
    <>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="">
              <div className="card text-black" style={{ borderRadius: "8px " }}>
                <div className="card-body p-md-4">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-1 mx-1 mx-md-2 mt-4">
                        Register
                      </p>

                      <form className="mx-1 mx-md-1">
                        <div className="d-flex flex-row align-items-center mb-1">
                          <div className="form-outline flex-fill mb-0">
                            <Input
                              type="text"
                              id="first_name"
                              required={true}
                              labelFor={"First Name"}
                              name={"first_name"}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-1">
                          <div className="form-outline flex-fill mb-0">
                            <Input
                              type="text"
                              id="last_name"
                              required={true}
                              labelFor={"Last Name"}
                              name={"last_name"}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-1">
                          <div className="form-outline flex-fill mb-0">
                            <Input
                              type="text"
                              id="email"
                              required={true}
                              labelFor={"Email"}
                              name={"email"}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-1">
                          <div className="form-outline flex-fill mb-0">
                            <Input
                              type="password"
                              id="password"
                              required={true}
                              labelFor={"password"}
                              name={"password"}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-1">
                          <div className="form-outline flex-fill mb-0">
                            <Input
                              type="password"
                              id="password_confirmation"
                              required={true}
                              labelFor={"Confirm Password"}
                              name={"password_confirmation"}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-1">
                          <div className="form-outline flex-fill mb-0">
                            <Input
                              type="tel"
                              id="phone"
                              required={true}
                              labelFor={"Phone Number"}
                              name={"phone"}
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-left mb-1">
                          <input
                            // className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="confirm"
                            required={true}
                          />
                          <label htmlFor="confirm">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-left mb-1">
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
