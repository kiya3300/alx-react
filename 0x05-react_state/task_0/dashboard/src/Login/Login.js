import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.form)}>
      <div className={css(styles['input-group'])}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" className={css(styles.loginInput)} />
      </div>
      <div className={css(styles['input-group'])}>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" className={css(styles.loginInput)} />
      </div>
      <button>OK</button>
      </div>
    </div>
  );
}

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  login: {
    margin: "50px",
    flexGrow: 1,
    [screenSize.small]: {
      margin: '0.25rem 0'
    },
  },

  'input-group': {
    '@media (max-width: 900px)': {
      margin: '0.25rem 0'
    }
  },

  loginInput: {
    marginLeft: "10px",
    marginRight: "20px",
    [screenSize.small]: {
      display: "block",
      marginLeft: 0,
      marginTop: "10px",
      marginBottom: "10px",
    },
  },
});

export default Login;
