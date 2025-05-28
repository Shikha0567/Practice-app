import React from "react";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="main">
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
