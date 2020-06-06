import React from "react";
import "./sass/main.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import LandingInfo from "./components/LandingInfo";
import Contact from "./components/Contact";
import Sidenav from "./components/Sidenav";
import About from "./pages/About";
import Submitted from "./pages/Submitted";
import Team from "./pages/Team";
import Footer from "./components/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <Sidenav />
            <Navbar />
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

                <Route
                    exact
                    path={process.env.PUBLIC_URL + "/submitted"}
                    component={Submitted}
                />
                <Route
                    exact
                    path={process.env.PUBLIC_URL + "/team"}
                    component={Team}
                />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
