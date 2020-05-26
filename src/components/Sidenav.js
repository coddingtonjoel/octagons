import React, { Fragment, useEffect } from "react";
import M from "materialize-css";
import MediaQuery from "react-responsive";
import sidenav from "../images/sidenav.svg";
import logo from "../images/Octagons.svg";

const Sidenav = () => {
    //init materialize-css sidenav
    useEffect(() => {
        M.AutoInit();
    }, []);

    return (
        <Fragment>
            <MediaQuery maxDeviceWidth={700}>
                <a
                    href="#!"
                    data-target="slide-out"
                    className="sidenav-trigger">
                    <img src={sidenav} alt="" />
                </a>
                <ul id="slide-out" className="sidenav">
                    <li className="sidenav-logo">
                        <img src={logo} alt="" />
                    </li>
                    <li>
                        <a className="waves-effect" href="#!">
                            about us
                        </a>
                    </li>
                    <li>
                        <a className="waves-effect" href="#!">
                            contact
                        </a>
                    </li>
                </ul>
            </MediaQuery>
        </Fragment>
    );
};

export default Sidenav;
