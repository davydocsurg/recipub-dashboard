import Login from "../../components/superAdmin/auth/Login";

const SuperAdminLogin = () => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6 border px-5 pt-5">
          <h3 className="text-primary text-center">Super Admin Login</h3>
          <Login />;
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLogin;
