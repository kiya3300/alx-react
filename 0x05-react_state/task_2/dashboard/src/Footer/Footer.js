import React from "react";
import { AppContext } from "../App/AppContext";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { user, logOut } from "../App/AppContext";



function Footer() {
  return (
    <div className="footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </div>
  );
}

export default Footer;
