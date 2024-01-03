import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div
        style={{
          width: "50%",
          border: "1px solid gray",
          display: "flex",
          alignItems: "center",
          margin: "auto",
          justifyContent: "space-around",
          padding: "10px",
          height: "50px",
          borderRadius: "15px",
        }}
      >
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default Home;
