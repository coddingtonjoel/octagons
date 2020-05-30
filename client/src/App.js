import React from "react";
import "./sass/main.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LandingInfo from "./components/LandingInfo";
import Contact from "./components/Contact";
import Sidenav from "./components/Sidenav";
import About from "./pages/About";

const App = () => {
    return (
        <BrowserRouter>
            <Sidenav />
            <Switch>
                <Route
                    exact
                    path={process.env.PUBLIC_URL + "/"}
                    render={(props) => (
                        <div className="complete-page">
                            <Header />
                            <LandingInfo />
                            <Contact />
                        </div>
                    )}
                />

                <Route
                    exact
                    path={process.env.PUBLIC_URL + "/about"}
                    component={About}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
