// import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

export default function RenderDashboard() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Dashboard />
      <Footer />
    </div>
  );
}
