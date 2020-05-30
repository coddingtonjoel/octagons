import React from "react";

const Logo = () => {
    return (
        <div>
            <svg
                className="logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 283.46 283.46">
                <g>
                    <path
                        className="outer"
                        d="M134.46 33.31L60.3 63.62l-31 73.88 30.31 74.16 73.88 31 74.16-30.32 31-73.87-30.31-74.16-73.88-31z"
                    />
                    <path
                        className="outer"
                        d="M134.32 33.36l-74.35 30.4-31.08 74.07 30.39 74.35 74.07 31.08 74.35-30.39 31.08-74.07-30.39-74.35-74.07-31.09z"
                    />

                    <path
                        className="octagon"
                        strokeWidth="2"
                        stroke="#fff"
                        strokeMiterlimit="10"
                        d="M149.23 38.62L74.3 69.25 42.97 143.9l30.64 74.93 74.64 31.33 74.94-30.64 31.32-74.64-30.63-74.94-74.65-31.32z"
                    />
                    <path
                        className="line"
                        d="M43.55 142.62l180.22 75.63M74.88 68l180.21 75.6M148.8 37.34l-1 211.54m1.5-149.66L74.88 68m74.1 74.8L75 68.12M221.52 217l-73.14-74.57"
                        strokeMiterlimit="10"
                    />
                </g>
            </svg>
        </div>
    );
};

export default Logo;
