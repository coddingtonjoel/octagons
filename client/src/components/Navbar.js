import React from "react";
import MediaQuery from "react-responsive";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <MediaQuery minDeviceWidth={701}>
            <div className="navbar">
                <a className="navbar-logo-anchor" href="/">
                    <div className="navbar-logo">
                        <Logo />
                        <p>octagons</p>
                    </div>
                </a>
                <div className="navbar-links">
                    <a
                        className="btn-flat waves-effect waves-light white-text"
                        href="/about">
                        about us
                    </a>
                    <a
                        className="btn-flat waves-effect waves-light white-text"
                        href="/team">
                        our team
                    </a>
                </div>
            </div>
        </MediaQuery>
    );
};

export default Navbar;
