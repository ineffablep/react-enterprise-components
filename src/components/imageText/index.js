import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const ImageText = ({ h4Text, list, src, alt, className }) => {
    return (
        <div className="w3-row">
            <div className={'w3-container w3-twothird ' + className}>
                <h4>{h4Text} </h4>
                <ul className="w3-ul">
                    {
                        list.map(_ => <li key={uuid.v4()} className="w3-large"> {_} </li>)
                    }
                </ul>
            </div>
            <div className="w3-container w3-third w3-hide-small">
                <img src={src} alt={alt} />
            </div>
        </div>
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
