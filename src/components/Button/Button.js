import React from "react";
import PropTypes from "prop-types";
import { Button as ButtonM } from "native-base";

function Button(props) {
  return (
     <ButtonM {...props} 
      _loading={{
        bg: "amber.400:alpha.70",
        _text: {
          color: "coolGray.700",
        },
      }}
      _spinner={{
        color: "white",
      }}
      >
        {props.children}
     </ButtonM>
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

export { Button as default };
