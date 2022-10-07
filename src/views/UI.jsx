import React from "react";
import Input from "../commons/form/Input";

const UI = () => {
    return (
        <>
            <div className="container">
                <h2 className="text-center">Components</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Input />
                    </div>
                </div>
            </div>
        </>
    );
};

export default UI;
