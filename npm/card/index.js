import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
var Card = function Card(_ref) {
    var className = _ref.className,
        title = _ref.title,
        headerClassName = _ref.headerClassName,
        content = _ref.content,
        contentClassName = _ref.contentClassName,
        buttons = _ref.buttons,
        headerButton = _ref.headerButton,
        children = _ref.children;

    return React.createElement(
        'div',
        { className: 'w3-card-4 w3-margin-bottom ' + className },
        React.createElement(
            'header',
            { className: 'w3-container pointer ' + headerClassName },
            headerButton ? React.createElement(
                'h3',
                null,
                React.createElement(
                    'span',
                    { className: 'w3-left' },
                    ' ',
                    title,
                    ' '
                ),
                React.createElement(
                    'button',
                    { className: 'w3-right', onClick: headerButton.onClick },
                    React.createElement('i', { className: headerButton.icon }),
                    headerButton.text
                )
            ) : React.createElement(
                'h3',
                { className: 'w3-center' },
                ' ',
                title,
                ' '
            )
        ),
        React.createElement(
            'div',
            { className: 'w3-container ' + contentClassName },
            content.map(function (_) {
                return React.createElement(
                    'p',
                    { key: uuid.v4() },
                    ' ',
                    _,
                    '  '
                );
            }),
            children
        ),
        React.createElement(
            'footer',
            { className: 'w3-container w3-padding-large' + contentClassName },
            React.createElement('hr', null),
            buttons && buttons.map(function (_) {
                return _.isLink ? React.createElement(
                    Link,
                    { key: uuid.v4(), className: 'w3-button w3-theme-d1 ' + _.className, to: _.link },
                    ' ',
                    _.text,
                    ' '
                ) : React.createElement(
                    'button',
                    { key: uuid.v4(), className: 'w3-button w3-theme-d1 ' + _.className, onClick: _.onClick },
                    ' ',
                    _.text,
                    ' '
                );
            })
        )
    );
};
Card.propTypes = {
    /**
    * Card Class Name
    */
    className: PropTypes.string,
    /**
     * Card Title
     */
    title: PropTypes.string,
    /**
     * Card Header Class Name
     */
    headerClassName: PropTypes.string,
    /**
     * Card Body Content in String Array , Displayed in Paragraphs
     */
    content: PropTypes.array,

    /**
     * Card Body Class Name
     */
    contentClassName: PropTypes.string,
    /**
     * Header Button
     */
    headerButton: PropTypes.shape({
        onClick: PropTypes.func,
        icon: PropTypes.string,
        text: PropTypes.string,
        className: PropTypes.string
    }),

    buttons: PropTypes.shape({
        /**
        * Card Footer  Button Text
        */
        text: PropTypes.string,
        /**
         * Button Click Callback
         */
        onClick: PropTypes.func,
        /**
         * Button Class Name
         */
        className: PropTypes.string,
        isLink: PropTypes.bool,
        link: PropTypes.string
    })
};

Card.defaultProps = {
    btnClassName: '',
    cardClassName: '',
    content: [],
    btnText: 'Submit',
    headerClassName: '',
    contentClassName: ''
};

export default Card;