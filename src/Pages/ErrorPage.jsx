import React, { useEffect } from "react";
import { Link, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import errorImg from "../assets/404-error.png";

const ErrorPage = () => {
  const error = useRouteError();

  useEffect(() => {
    document.title = "BoiPoka - Page Not Found";
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 mt-[80px] mb-[80px]">
        <img src={errorImg} alt="404 Error" className="w-[460px] mb-6" />

        <h1 className="text-4xl font-semibold mb-4">Oops! Page not found!</h1>
        <p className="text-[#627382] text-lg mb-6">
          {error?.status && `${error.status} - Page Not Found! `}
          {error?.statusText || "The page you are looking for is not available."}
        </p>

        <Link to="/">
          <button className="w-[150px] h-[48px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                             text-white text-[16px] font-medium rounded-lg flex items-center justify-center">
            Go Back!
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
