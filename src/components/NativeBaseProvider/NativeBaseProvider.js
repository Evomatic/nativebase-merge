import React from "react";
import PropTypes from "prop-types";
import { NativeBaseProvider as NativeBaseProviderM } from "native-base";

function NativeBaseProvider(props) {
    return (
        <NativeBaseProviderM {...props}>{props.children}</NativeBaseProviderM>
    )
}

export default NativeBaseProvider;