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
                            <Input
                                id="name"
                                labelFor="Name"
                                type="text"
                                placeholder="Name"
                                name="name"
                                required={required}
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card card-body">
                            <Button text="Login" style={"btn-primary btn-lg"} />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card card-body">
                            <SelectInput
                                id="Gender"
                                labelFor="Gender"
                                name="gender"
                                options={options}
                                setOptions={setOptions}
                                required={required}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UI;
