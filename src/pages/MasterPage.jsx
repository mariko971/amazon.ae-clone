import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const MasterPage = ({ ChildPage, currentUser }) => {
  return (
    <>
      <Header currentUser={currentUser} />
      <ChildPage currentUser={currentUser} />
      <Footer />
    </>
  );
};

export default MasterPage;
