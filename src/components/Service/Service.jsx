import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Cards from "./Cards";
import Footer from "../Footer/Footer";
const Service = () => {
  return (
    <div>
      <div className="w-8/12 mx-auto mt-[5%]">
        <div>
          <h1 className="text-5xl font-bold">Services We Offer</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <p className="text-lg font-semibold">
            We Discover the Digital possibilities for your branch with our
            comprehensive suit of service
          </p>
          <div className="flex flex-row gap-2">
            {/* Use Link component for navigation */}
            <Link
              to="/previous"
              className="ring-black hover:ring-1 p-4 rounded-full"
            >
              <FaArrowLeft />
            </Link>
            <Link
              to="/next"
              className="ring-black hover:ring-1 p-4 rounded-full"
            >
              <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="py-4">
          <Cards />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
