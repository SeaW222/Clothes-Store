import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://ideogram.ai/assets/image/lossless/response/jGp9cNw5RfOfJQbCER3WEg')`,
        }}
      ></div>

      {/* Overlay (nếu muốn làm tối phần nền một chút) */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

      {/* Nội dung login/register */}
      <div className="relative flex items-center justify-center min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
