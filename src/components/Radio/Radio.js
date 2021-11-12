import React from "react";
import PropTypes from "prop-types";
import { Radio } from "native-base";

function RadioM(props) {
    return (
        <Radio {...props}>{props.children}</Radio>
    )
}

RadioM.propTypes = {
    children: PropTypes.node,
    isDisabled: PropTypes.bool,
    size: PropTypes.oneOf(["sm", "md", "lg"]),

}

export default RadioM;