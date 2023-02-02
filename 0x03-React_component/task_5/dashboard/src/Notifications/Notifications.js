import React from 'react';
import './Notifications.css';
import closebtn from '../assets/close-btn.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { NotificationItemShape } from './NotificationItemShape';


export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this)
  }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    markAsRead: PropTypes.func
  }

  static defaultProps = {
      displayDrawer: false,
      listNotifications: []
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  shouldComponentUpdate(nextProps) {
    return ((nextProps.listNotifications.length > this.props.listNotifications.length) ? true : false)

  }
  render() {
    const loadNotifs = () => {
      let rows = <></>
      const notifArray = this.props.listNotifications
      if (notifArray.length == 0){
          return <p>No new notification for now</p>
      } else {
          rows = notifArray.map((notif) => {
            if (notif.html != undefined && notif.html.__html != null){
              return (<NotificationItem key={notif.id} id={notif.id} type={notif.type}
              html={notif.html} markAsRead={this.markAsRead}/>)
            } else {
            return (<NotificationItem key={notif.id} id={notif.id} type={notif.type}
            value={notif.value} markAsRead={this.markAsRead}/>)
            }
          })
      }
      return (
        <>
        <p>Here is the list of notifications:</p>
            <ul>
              {rows}
            </ul>
        </>
      )
    }
    const showNotifs = () => {
      if (this.props.displayDrawer) {
        return (
          <>
            <div className="Notifications">
              <button style={{float:'right', background: 'none', border: 'none'}}
              aria-label="Close"
              onClick={()=>console.log('Close button has been clicked')}>
                <img src={closebtn} alt="close-btn"/>
              </button>
              {loadNotifs()}
            </div>
          </>
        )
      }
    }
    return (
    <>
      <div className="menuItem">Your notifications</div>
      {showNotifs()}
    </>
    )
  }
}

// Notifications.defaultProps = {
//   displayDrawer: false,
//   listNotifications: []
// }

// Notifications.propTypes = {
  
// }

