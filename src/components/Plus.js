import React from "react";

const Plus = (props) => {
    return (
        <div>
            <svg
                className={`header-plus header-plus-${props.num}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 1000">
                <line
                    className="plus"
                    x1="500"
                    y1="150.5"
                    x2="500"
                    y2="849.5"
                />
                <line
                    className="plus"
                    x1="849.5"
                    y1="500"
                    x2="150.5"
                    y2="500"
                />
            </svg>
        </div>
    );
};

export default Plus;
