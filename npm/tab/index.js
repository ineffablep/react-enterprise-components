var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

var Tab = function (_Component) {
    _inherits(Tab, _Component);

    function Tab(props) {
        _classCallCheck(this, Tab);

        var _this = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, props));

        _this.onTabClick = _this.onTabClick.bind(_this);
        _this.state = {
            selectedTabIndex: props.selectedTabIndex,
            tabs: props.tabs
        };
        return _this;
    }

    _createClass(Tab, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.onTabClick(this.state.selectedTabIndex);
        }
    }, {
        key: 'onTabClick',
        value: function onTabClick(i) {
            var tabs = this.state.tabs;
            tabs.forEach(function (_) {
                return _.className = '';
            });
            var tab = tabs[i];
            tab.className = 'w3-tab-active';
            this.setState({ selectedTabIndex: i, tabs: tabs });
            this.props.onClick(i);
        }
    }, {
        key: 'renderContent',
        value: function renderContent() {
            return React.createElement(
                'div',
                { className: 'w3-tab-content' },
                this.props.children && this.props.children[this.state.selectedTabIndex]
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                { className: 'w3-tab-component' },
                React.createElement(
                    'div',
                    { className: 'w3p-tabs' },
                    this.state.tabs.map(function (_, i) {
                        return React.createElement(
                            'button',
                            { key: uuid.v4(),
                                className: 'w3-bottombar w3-hover-indigo w3-padding ' + _.className,
                                style: { width: 100 / _this2.state.tabs.length + '%' },
                                onClick: function onClick() {
                                    _this2.onTabClick(i);
                                } },
                            React.createElement('i', { className: _.icon + ' tab-icon' }),
                            React.createElement(
                                'span',
                                { className: 'tab-text ' },
                                '  ',
                                _.name,
                                ' '
                            ),
                            _.badge && _.badge > 0 && React.createElement(
                                'span',
                                { className: 'w3-badge' },
                                ' ',
                                _.badge,
                                ' '
                            )
                        );
                    })
                ),
                React.createElement(
                    'div',
                    { className: 'w3-tabs-content' },
                    this.renderContent()
                )
            );
        }
    }]);

    return Tab;
}(Component);

Tab.propTypes = {
    selectedTabIndex: PropTypes.number,
    onClick: PropTypes.func,
    children: PropTypes.array,
    tabs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        icon: PropTypes.string,
        badge: PropTypes.number,
        className: PropTypes.string
    }))
};

export default Tab;