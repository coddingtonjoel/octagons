import React from "react";
import "./sass/main.scss";
import Header from "./components/Header";
import LandingInfo from "./components/LandingInfo";
import Contact from "./components/Contact";

const App = () => {
    return (
        <div className="complete-page">
            <Header />
            <LandingInfo />
            <Contact />
        </div>
    );
};

export default App;
