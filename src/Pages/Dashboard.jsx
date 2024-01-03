import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import SidebarWithHeader from "../Components/Admin/Admin_Sidebar";

const Dashboard = () => {
  const { isAuth, logout, token } = useContext(AuthContext);
  return (
    // <div style={{
    //   width: "30%",
    //   display: "flex",
    //   flexDirection: "column",
    //   margin: "auto",
    //   border: "1px solid silver",
    //   marginTop: "150px",
    //   padding: "15px",
    //   borderRadius: "15px",
    // }}>
    // <h1>Dashboard</h1>
    // <div
      
    // >
      
    //   <h3 style={{fontSize:"10px",overflow:"hidden"}}>Token:{token}</h3>
    //   <h3>Auth Status : {isAuth ? "true" : "false"}</h3>
    //   <button onClick={logout}>Logout</button>
    // </div>
    // </div>
    <SidebarWithHeader />
  );
};

export default Dashboard;
