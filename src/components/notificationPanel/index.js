import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const NotificationPanel = ({ notifications, generic, onNotificationClick }) => {
    return generic.showNotificationPanel ? <div className="w3-sidebar w3-bar-block w3-card-2 w3-animate-right">
        <button onClick={() => onNotificationClick(generic.showNotificationPanel)} className="w3-bar-item w3-button w3-large">Close &times;</button>
        <ul className="w3-ul w3-border">{notifications.map(_ => <li key={uuid.v4()}>_.message</li>)}</ul>
    </div> : null;
};

NotificationPanel.propTypes = {
    notifications: PropTypes.array,
    generic: PropTypes.object,
    onNotificationClick: PropTypes.func
};

export default NotificationPanel;
