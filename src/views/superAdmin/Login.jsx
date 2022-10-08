import Login from "../../components/superAdmin/auth/Login";
import "../../index.css";

const SuperAdminLogin = () => {
    return (
        <div className="container mt-4">
            <div className="card p-5">
                <h3 className="text-primary text-center">Super Admin Login</h3>
                <div className="card-body">
                    <Login />
                </div>
            </div>
        </div>
    );
};

export default SuperAdminLogin;
