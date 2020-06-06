import React from "react";
import Plus from "./Plus";

const Header = () => {
    return (
        <header className="header">
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
