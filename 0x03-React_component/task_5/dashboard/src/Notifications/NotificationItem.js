import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = React.memo(function NotificationItem(props) {
  return(
    <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}
    onClick={()=>props.markAsRead(props.id)}>{props.value}</li>
  )
})

NotificationItem.defaultProps = {
  type: "default"
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({__html: PropTypes.string}),
  value: PropTypes.string
}

export default NotificationItem
