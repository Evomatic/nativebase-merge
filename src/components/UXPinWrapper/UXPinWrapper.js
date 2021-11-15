// eslint-disable-next-line no-unused-vars
import React from "react";
import { NativeBaseProvider } from "native-base";

export default function UXPinWrapper({ children }) {
  return (<NativeBaseProvider>{children}</NativeBaseProvider>);
}
