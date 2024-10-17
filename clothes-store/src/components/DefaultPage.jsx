import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";
const DefaultPage = ({ props }) => {
  return (
    <div>
      <Header />
      {props?.Children}
      <Footer />
    </div>
  );
};

export default DefaultPage;
