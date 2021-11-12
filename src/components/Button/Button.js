import React from "react";
import PropTypes from "prop-types";
import { Button as ButtonM, NativeBaseProvider as NativeBaseProviderM } from "native-base";

function Button(props) {
  return (
    // <NativeBaseProviderM>
     <ButtonM {...props} isDisabled={props.isDisabled} size={props.size}>{props.children}</ButtonM>
    //  </NativeBaseProviderM>
  );
  
}

Button.propTypes = {
  /**
   * @uxpinrenameprop label
   */
  children: PropTypes.node,
  colorScheme: PropTypes.string,
  variant: PropTypes.oneOf(["outline", "unstyled", "subtle", "solid", "ghost", "link"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
};

export default Button;
