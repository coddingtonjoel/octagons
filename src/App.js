import React from "react";
import "./sass/main.scss";
import Header from "./components/Header";
import LandingInfo from "./components/LandingInfo";
import Contact from "./components/Contact";
import Sidenav from "./components/Sidenav";

const App = () => {
    return (
        <div className="complete-page">
            <Sidenav />
            <Header />
            <LandingInfo />
            <Contact />
        </div>
    );
};

export default App;
