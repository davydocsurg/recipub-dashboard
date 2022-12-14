import React, { useState } from "react";
import Button from "../../../commons/form/Button";
import Input from "../../../commons/form/Input";

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const onHandleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onHandleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <>
            <Input
                labelFor={"Email"}
                type={"email"}
                label={"email"}
                placeholder={"me@example.com"}
                required={true}
                name={"email"}
                id={"email"}
                value={email}
                style={"mb-3 mt-1 col-lg-8"}
                handleChange={onHandleChangeEmail}
            />

            <Input
                labelFor={"Password"}
                type={"password"}
                label={"password"}
                placeholder={"********"}
                required={true}
                name={"password"}
                id={"password"}
                value={password}
                style={"mb-3 mt-1"}
                handleChange={onHandleChangePassword}
            />

            <div className="text-center mt-2">
                <Button
                    type={"submit"}
                    text={"Login"}
                    loading={false}
                    style={"btn btn-primary px-5"}
                    disabled={false}
                />
            </div>
        </>
    );
};

export default Login;
