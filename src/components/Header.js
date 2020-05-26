import React from "react";
import Logo from "./Logo";
import Plus from "./Plus";
import MediaQuery from "react-responsive";

const Header = () => {
    return (
        <header className="header">
            <MediaQuery minDeviceWidth={701}>
                <div className="header-logo">
                    <Logo />
                </div>
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
            </MediaQuery>

            <div className="header-text">
                <h1 className="header-main white-text">octagons</h1>
                <p className="header-sub white-text">
                    digital marketing for businesses in need
                </p>
            </div>
            <div className="header-spread">
                <Plus num="1" />
                <Plus num="2" />
                <Plus num="3" />
                <Plus num="4" />
                <Plus num="5" />
                <Plus num="6" />
                <Plus num="7" />
                <Plus num="8" />
            </div>
        </header>
    );
};

export default Header;
