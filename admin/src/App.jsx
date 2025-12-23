import React, { useState } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") || ""
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {}
      <ToastContainer position="top-right" autoClose={3000} />

      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <div className="flex">
            <Sidebar />
            {}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
