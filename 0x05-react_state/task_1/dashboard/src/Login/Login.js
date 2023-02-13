import React from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.submitButtonState = this.submitButtonState.bind(this)
  }


  handleLoginSubmit(e) {
    e.preventDefault();
    this.setState({
      isLoggedIn: true
    })
  }

  handleChangeEmail(e) {
    this.setState({
      // ...this.state,
      email: e.target.value
    }, this.submitButtonState)

  }
  handleChangePassword(e) {
    this.setState({
      // ...this.state,
      password: e.target.value
    }, this.submitButtonState)

  };


  submitButtonState() {
    if (this.state.email.length > 0 && this.state.password.length > 0) {
      this.setState({ enableSubmit: true })
    } else {
      this.setState({ enableSubmit: false })
    }
  }



  render() {
    const { email, password, isLoggedIn, enableSubmit } = this.state
    return (
      <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>

        <div className={css(styles.form)}>
          <form onSubmit={this.handleLoginSubmit}>
            <div className={css(styles['input-group'])}>

              <label htmlFor="email">Email:</label>

              <input onChange={this.handleChangeEmail} value={email} type="email" id="email" className={css(styles.loginInput)} />
            </div>
            <div className={css(styles['input-group'])}>
              <label htmlFor="password">Password:</label>

              <input onChange={this.handleChangePassword} value={password} type="password" id="password" className={css(styles.loginInput)} />
            </div>
            <input type="submit" value="OK" disabled={!enableSubmit} />
          </form>
        </div>
      </div >
    );
  }
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
