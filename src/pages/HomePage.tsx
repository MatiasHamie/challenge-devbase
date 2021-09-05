import React from "react";
import Header from "../components/Header";
import NavBar from "../components/shared/NavBar";
import UserButtonContainer from "../components/UserButtonsContainer";

const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar title="Home" />
      <div className="homepage-body">
        <Header />
        <UserButtonContainer />
      </div>
    </div>
  );
};

export default HomePage;
