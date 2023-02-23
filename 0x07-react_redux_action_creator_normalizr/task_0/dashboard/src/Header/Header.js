import React from "react";
import holberton_logo from "../assets/holberton_logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";
import { user, logOut } from '../App/AppContext'

function Header() {

  return (
    <AppContext.Consumer>

      {({ user, logOut }) => (
        <div className={css(styles.header)}>
          <img src={holberton_logo} className={css(styles.headerImg)} />
          <div>
            <h1>School dashboard</h1>
            {user.isLoggedIn ?
              <section id='logoutSection'>
                <hr></hr>
                <p>Welcome <strong>email</strong></p>
                <a onClick={logOut}>(logout)</a>
              </section> : null}
          </div>

        </div>
      )

      }
    </AppContext.Consumer>

  );
}

const cssVars = {
  mainColor: "#e01d3f",
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    color: cssVars.mainColor,
    fontSize: "20px",
  },

  headerImg: {
    width: "200px",
  },
});

export default Header;
