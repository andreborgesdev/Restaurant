import React from "react";
import PropTypes from "prop-types";

// This is a stateless functional component and that's why we don't need to create a class for it. Since it has no state
// we can use jut create a function or a const like this
const Header = props => (
    <header className="top">
        <h1>
            Catch
            <span className="ofThe">
                        <span className="of">of</span>
                        <span className="the">the</span>
                    </span>
            Day
        </h1>
        <h3 className="tagline">
            <span>{ props.tagline }</span>
        </h3>
    </header>
);

Header.propTypes = {
    tagline: PropTypes.string.isRequired
};

export default Header;