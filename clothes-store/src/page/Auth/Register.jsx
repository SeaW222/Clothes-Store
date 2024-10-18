import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faEye,
  faEyeSlash,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";

const Register = (props) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <AuthLayout>
      <div className="flex items-center justify-center bg-gray-100 ">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-6xl w-screen">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-2 text-center">
            Create an account
          </h1>
          <p className="text-sm text-center text-gray-500 mb-6">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>

          {/* Form */}
          <form className="flex flex-col items-center">
            {/* Name */}
            <div className="mb-4 w-8/12 ">
              <label className="block text-sm text-gray-700">
                What should we call you?
              </label>
              <input
                type="text"
                placeholder="Enter your profile name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="mb-4 w-8/12">
              <label className="block text-sm text-gray-700">
                What's your email?
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div className="mb-4 w-8/12 relative">
              <label className="block text-sm text-gray-700">
                Create a password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute text-sm right-3 top-0 text-gray-500"
              >
                {isPasswordVisible ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <>
                    <FontAwesomeIcon icon={faEye} />
                  </>
                )}
              </button>
            </div>

            {/* Terms */}
            <p className="text-sm text-gray-500 mb-4">
              By creating an account, you agree to the{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Terms of use
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Privacy Policy
              </a>
              .
            </p>

            {/* Submit Button */}
            <button className="mb-4 w-8/12 bg-gray-400 text-white py-2 rounded-3xl hover:bg-gray-500 transition duration-300">
              Create an account
            </button>
          </form>

          {/* Social login */}
          <div className="flex justify-center py-7">
            {/* Facebook Button */}
            <button className="w-1/3 flex items-center justify-center text-black py-2 rounded-3xl mx-1 border border-black shadow-sm">
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              Facebook
            </button>

            {/* Google Button */}
            <button className="w-1/3 flex items-center justify-center text-black py-2 rounded-3xl mx-1 border border-black shadow-sm">
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Google
            </button>
          </div>
          {/* Back to Home Button */}
          <Link
            to="/"
            className="absolute left-8 bottom-4 flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-gray-700" />
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
