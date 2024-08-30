import React, { useEffect, useState } from "react";
import Nav from "./Nav/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Loader from "../Component/Loader/Loader";

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or other loading processes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // Show the preloader if loading
  }
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
