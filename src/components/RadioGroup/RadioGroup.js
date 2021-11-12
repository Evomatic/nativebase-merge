import React from "react";
import PropTypes from "prop-types";
import { Radio } from "native-base";

function RadioGroup(props) {
    return (
        <Radio.Group {...props}>{props.children}</Radio.Group>
    )
}

export default RadioGroup;