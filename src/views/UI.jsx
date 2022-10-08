import React, { useState } from "react";
import Button from "../commons/form/Button";
import Input from "../commons/form/Input";
import SelectInput from "../commons/form/Select";

const UI = () => {
    const required = true;
    const [options, setOptions] = useState([
        { option: "male", value: "male" },
        { option: "female", value: "female" },
        { option: "other", value: "other" },
    ]);
    return (
        <>
            <div className="container">
                <h2 className="text-center">Components</h2>
                <div className="row mt-5">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card card-body">
                            <h5 className="">Input</h5>
                            <Input
                                id="name"
                                labelFor="Name"
                                type="text"
                                placeholder="Name"
                                name="name"
                                required={required}
                                error={"This field is required"}
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card card-body">
                            <h5 className="">Button</h5>
                            <Button text="Login" style={"btn-primary btn-lg"} />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card card-body">
                            <h5 className="">Select Input</h5>
                            <SelectInput
                                id="Gender"
                                labelFor="Gender"
                                name="gender"
                                options={options}
                                setOptions={setOptions}
                                required={required}
                                error={"Gender is required"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UI;
