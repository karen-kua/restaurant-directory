import React from "react";
import "./SearchBar.css"

const NameSearchBar = props => (
  <div className="formContainer">
    <input className="formDetails" {...props} />
  </div>
);
export default NameSearchBar;
