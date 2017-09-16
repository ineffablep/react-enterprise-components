import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

var NotificationPanel = function NotificationPanel(_ref) {
    var notifications = _ref.notifications,
        generic = _ref.generic,
        onNotificationClick = _ref.onNotificationClick;

    return generic.showNotificationPanel ? React.createElement(
        'div',
        { className: 'w3-sidebar w3-bar-block w3-card-2 w3-animate-right' },
        React.createElement(
            'button',
            { onClick: function onClick() {
                    return onNotificationClick(generic.showNotificationPanel);
                }, className: 'w3-bar-item w3-button w3-large' },
            'Close \xD7'
        ),
        React.createElement(
            'ul',
            { className: 'w3-ul w3-border' },
            notifications.map(function (_) {
                return React.createElement(
                    'li',
                    { key: uuid.v4() },
                    '_.message'
                );
            })
        )
    ) : null;
};

NotificationPanel.propTypes = {
    notifications: PropTypes.array,
    generic: PropTypes.object,
    onNotificationClick: PropTypes.func
};

export default NotificationPanel;