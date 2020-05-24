import React from "react";
import "./sass/main.scss";
import Header from "./components/Header";
import LandingInfo from "./components/LandingInfo";

const App = () => {
    return (
        <div className="complete-page">
            <Header />
            <LandingInfo />
        </div>
    );
};

export default App;
