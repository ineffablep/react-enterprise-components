import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
const Card = ({ className, title, headerClassName, content, contentClassName, buttons, headerButton, children }) => {
    return (
        <div className={'w3-card-4 w3-margin-bottom ' + className}>
            <header className={'w3-container pointer ' + headerClassName}>
                {
                    headerButton ?
                        <h3>
                            <span className="w3-left"> {title} </span>
                            <button className="w3-right" onClick={headerButton.onClick}>
                                <i className={headerButton.icon} />
                                {headerButton.text}
                            </button>
                        </h3>
                        : <h3 className="w3-center"> {title} </h3>
                }

            </header>
            <div className={'w3-container ' + contentClassName}>
                {content.map(_ => <p key={uuid.v4()}> {_}  </p>)}
                {children}
            </div>
            <footer className={'w3-container w3-padding-large' + contentClassName}>
                <hr />
                {
                    buttons && buttons.map(_ =>
                        _.isLink
                            ? <Link key={uuid.v4()} className={'w3-button w3-theme-d1 ' + _.className} to={_.link}> {_.text} </Link>
                            : <button key={uuid.v4()} className={'w3-button w3-theme-d1 ' + _.className} onClick={_.onClick}> {_.text} </button>
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
        className: PropTypes.string,
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
