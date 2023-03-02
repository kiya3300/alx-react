import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { AppContext } from "../App/AppContext";
import { user, logOut } from '../App/AppContext'

function Footer() {
  return (
    <AppContext.Consumer>
      {({ user, logOut }) => (
        <div className="footer">
          <p>
            Copyright {getFullYear()} - {getFooterCopy(true)}
          </p>
          {
            user.isLoggedIn && <p>Contact us</p>
          }
        </div>

      )}

    </AppContext.Consumer>

  );
}

export default Footer;
