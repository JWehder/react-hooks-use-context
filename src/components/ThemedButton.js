import React, { useContext } from "react";
import { ThemeContext } from "react"

function ThemedButton({ ...props }) {

  const { theme } = useContext(ThemeContext)

  return <button className={theme} {...props} />;
}

export default ThemedButton;
