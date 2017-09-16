import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
const Card = ({ className, title, headerClassName, content, contentClassName, buttons }) => {
    return (
        <div className={'w3-card-4 w3-margin-bottom ' + className}>
            <header className={'w3-container pointer ' + headerClassName}>
                <h3> {title} </h3>
            </header>
            <div className={'w3-container ' + contentClassName}>
                {content.map(_ => <p key={uuid.v4()}> {_} </p>)}
            </div>
            <footer className={'w3-container w3-padding-large' + contentClassName}>
                <hr />
                {
                    buttons && buttons.map(_ =>
                        _.isLink
                            ? <Link className={'w3-button w3-theme-d1 ' + _.className} to={_.link}> {_.text} </Link>
                            : <button className={'w3-button w3-theme-d1 ' + _.className} onClick={_.onClick}> {_.text} </button>
                    )
                }
            </footer>
        </div>
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
    title: PropTypes.string.isRequired,
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

    buttons: PropTypes.arrayOf({
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
        className: PropTypes.string
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
