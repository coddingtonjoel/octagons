import React from "react";
import Logo from "./Logo";

const Header = () => {
    return (
        <header className="header">
            <div className="navbar">
                <a
                    className="btn-flat waves-effect waves-light white-text"
                    href="#!">
                    about us
                </a>
                <a
                    className="btn-flat waves-effect waves-light white-text"
                    href="#!">
                    contact
                </a>
            </div>
            <div className="header-logo">
                <Logo />
            </div>
        </header>
    );
};

export default Header;
