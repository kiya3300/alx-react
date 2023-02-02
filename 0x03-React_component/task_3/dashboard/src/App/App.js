import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';


export const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
]

export const listNotifications = [
  {id: 1, type:"default", value: "New course available", html:{__html:null}},
  {id: 2, type:"urgent", html:{__html:"Object Oriented Programming intro"}},
  {id: 3, type:"default", value: "Present Javascript project requirements test on Friday"}
]

class App extends React.Component {
  static propTypes = {
    logOut: PropTypes.func
  }

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => console.log('loggedout')
  }

  componentDidMount() {
    this.alert()
  }

  alert() {
    document.addEventListener('keydown', (e) => {
      e.preventDefault()
      if (e.ctrlKey && e.code =='KeyH'){
        this.props.logOut()
        alert('Logging you out')
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', alert)
  }

  render () {
    const LoginStatus = () => {
      if (this.props.isLoggedIn) {
        return (
          <BodySectionWithMarginBottom title="Course List">
            <CourseList listCourses={listCourses}/>
          </BodySectionWithMarginBottom>
        )
      } else {
        return (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login/>
          </BodySectionWithMarginBottom>
        )
    }
  }
  return (
    <>
      <Notifications listNotifications={listNotifications}/>
      <div className="App-header">
        <Header/>
      </div>
      {LoginStatus()}
      <BodySection title="News from the School"><p>News around the school!</p></BodySection>
      <div className="App-footer">
        <Footer />
      </div>
    </>

  );
  }
}

// App.defaultProps = {isLoggedIn: false}

export default App;
