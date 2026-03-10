import React from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AvailableDonarDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
     const res= await axios.post(
        "http://localhost:8000/api/logout",
        {},
         { withCredentials: true }
      );
      console.log(res.data,"Logout successful");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default AvailableDonarDashboard;





 
