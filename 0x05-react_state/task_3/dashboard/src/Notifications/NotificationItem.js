import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const NotificationItem = React.memo(function NotificationItem({
  type,
  value,
  html,
  markNotificationAsRead,
  id,
}) {
  let listItem;

  let typeStyle = css(type === "urgent" ? styles.urgent : styles.default);

  if (value) {
    listItem = (
      <li
        className={typeStyle}
        data-notification-type={type}
        onClick={() => markNotificationAsRead(id)}
      >
        {value}
      </li>
    );
  } else {
    listItem = (
      <li
        className={typeStyle}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markNotificationAsRead(id)}
      ></li>
    );
  }

  return listItem;
});

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
  markNotificationAsRead: () => { },
  id: NaN,
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markNotificationAsRead: PropTypes.func,
  id: PropTypes.number,
};

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const listItemSmall = {
  listStyle: "none",
  borderBottom: "1px solid black",
  padding: "10px 8px",
  fontSize: "20px",
};

const styles = StyleSheet.create({
  default: {
    color: "blue",
    [screenSize.small]: listItemSmall,
  },

  urgent: {
    color: "red",
    [screenSize.small]: listItemSmall,
  },
});

export default NotificationItem;
