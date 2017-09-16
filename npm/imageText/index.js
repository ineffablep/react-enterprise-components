import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

var ImageText = function ImageText(_ref) {
    var h4Text = _ref.h4Text,
        list = _ref.list,
        src = _ref.src,
        alt = _ref.alt,
        className = _ref.className;

    return React.createElement(
        'div',
        { className: 'w3-row' },
        React.createElement(
            'div',
            { className: 'w3-container w3-twothird ' + className },
            React.createElement(
                'h4',
                null,
                h4Text,
                ' '
            ),
            React.createElement(
                'ul',
                { className: 'w3-ul' },
                list.map(function (_) {
                    return React.createElement(
                        'li',
                        { key: uuid.v4(), className: 'w3-large' },
                        ' ',
                        _,
                        ' '
                    );
                })
            )
        ),
        React.createElement(
            'div',
            { className: 'w3-container w3-third w3-hide-small' },
            React.createElement('img', { src: src, alt: alt })
        )
    );
};

ImageText.propTypes = {
    h4Text: PropTypes.string,
    list: PropTypes.array,
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string
};
export default ImageText;