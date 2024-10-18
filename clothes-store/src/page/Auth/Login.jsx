import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faApple,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEye,
  faEyeSlash,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";

const Login = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <AuthLayout>
      <div className="flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-6xl w-screen text-center">
          {/* Title */}
          <h1 className="text-2xl relative font-bold mb-6">Log in</h1>

          {/* Form */}
          <form className="flex flex-col items-center">
            {/* Email */}
            <div className="mb-4 w-8/12 relative">
              <label className="block text-sm text-gray-700 text-left">
                Email address or user name
              </label>
              <input
                type="email"
                placeholder="Enter your email or username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div className="mb-4 w-8/12 relative">
              <label className="block text-sm text-gray-700 text-left">
                Password
              </label>
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute text-sm right-3 top-9 text-gray-500"
              >
                {isPasswordVisible ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </button>
            </div>

            {/* Remember Me */}
            <div className="flex items-center w-8/12 mb-6">
              <label className="flex items-center text-sm text-gray-700">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
            </div>

            {/* Terms */}
            <p className="text-sm text-gray-500 mb-4 w-full">
              By continuing, you agree to the{" "}
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
              Log in
            </button>
          </form>

          {/* Links */}
          <div className="mb-6">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot your password?
            </a>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </p>
          </div>

          {/* Social Login */}
          <div className="flex items-center justify-center mb-6 ">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="px-3 text-gray-500 text-sm whitespace-nowrap">
              Or continue with
            </p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-600">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" className="text-red-600">
              <FontAwesomeIcon icon={faGoogle} size="lg" />
            </a>
            <a href="#" className="text-black">
              <FontAwesomeIcon icon={faApple} size="lg" />
            </a>
            <a href="#" className="text-blue-400">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
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

export default Login;
