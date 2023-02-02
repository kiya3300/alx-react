import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';


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
  static defaultProps = {
    isLoggedIn: false
  }

  render () {
    const LoginStatus = () => {
      if (this.props.isLoggedIn) {
        console.log(listCourses)
        return <CourseList listCourses={listCourses}/>
      } else {
        return (
          <div className="App-body"><p>Login to access the full dashboard</p>
            <Login/>
          </div>
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
      <div className="App-footer">
        <Footer />
      </div>
    </>

  );
  }
}

// App.defaultProps = {isLoggedIn: false}

export default App;
