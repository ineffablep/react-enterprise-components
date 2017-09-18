var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import localforage from 'localforage';
import axios from 'axios';

var AutoComplete = function (_Component) {
    _inherits(AutoComplete, _Component);

    function AutoComplete(props) {
        _classCallCheck(this, AutoComplete);

        var _this = _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call(this, props));

        _this.onInputChange = _this.onInputChange.bind(_this);
        _this.onSuggestSelect = _this.onSuggestSelect.bind(_this);

        _this.state = {
            val: '',
            suggestions: _this.props.suggestions
        };
        return _this;
    }

    _createClass(AutoComplete, [{
        key: 'onInputChange',
        value: function onInputChange(e) {
            var val = e.target.value;
            this.setState({ val: val });
            if (val && val.length > 0) {
                var sug = this.filterSuggestions(this.state.suggestions);
                if (sug.length < 20) {
                    this.getSuggestionList(val);
                } else {
                    this.setState({ suggestions: sug });
                }
            }
        }
    }, {
        key: 'onSuggestSelect',
        value: function onSuggestSelect(sugItem) {
            if (sugItem) {
                this.setState({ val: '' });
                if (this.props.onSuggestSelect) {
                    this.props.onSuggestSelect(sugItem);
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var placeholder = this.props.placeholder;
            var suggestions = this.state.suggestions;

            return React.createElement(
                'div',
                { className: 'autoComplete' },
                React.createElement('input', { type: 'search', autoComplete: true,
                    className: 'w3-input', onChange: this.onInputChange,
                    placeholder: placeholder }),
                this.state.val && React.createElement(
                    'ul',
                    { className: 'w3-ul w3-white w3-border sug' },
                    suggestions && suggestions.map(function (_) {
                        return React.createElement(
                            'div',
                            { key: uuid.v4() },
                            _.title && React.createElement(
                                'h3',
                                null,
                                _.title,
                                ' '
                            ),
                            _.suggestions && _.suggestions.map(function (s) {
                                return React.createElement(
                                    'li',
                                    {
                                        onClick: function onClick() {
                                            return _this2.onSuggestSelect(s, _);
                                        },
                                        className: 'pointer',
                                        key: uuid.v4() },
                                    s.text
                                );
                            }),
                            !_.suggestions && React.createElement(
                                'li',
                                {
                                    onClick: function onClick() {
                                        return _this2.onSuggestSelect(_);
                                    },
                                    className: 'pointer',
                                    key: uuid.v4() },
                                _.text
                            )
                        );
                    })
                )
            );
        }
    }, {
        key: 'getSuggestionList',
        value: function getSuggestionList(filterValue) {
            var _this3 = this;

            if (filterValue) {
                localforage.getItem(this.props.localKey).then(function (err, sugList) {
                    if (!err && sugList) {
                        var suggestions = _this3.filterSuggestions(sugList, filterValue);
                        _this3.setState({ suggestions: suggestions });
                    }
                    if (_this3.state.suggestions.length < 20) {
                        if (_this3.props.getSuggestionsUrl) {
                            axios.get(_this3.props.getSuggestionsUrl + '?s=' + filterValue).then(function (response) {
                                if (response.data) {
                                    _this3.setState({ suggestions: response.data });
                                } else {
                                    _this3.setState({ suggestions: response });
                                }
                            }).catch(function (err) {});
                        }
                    }
                });
            }
        }
    }, {
        key: 'filterSuggestions',
        value: function filterSuggestions(suggestions, val) {
            if (val && val.length > 0 && suggestions && suggestions.length > 0) {
                var sug = JSON.parse(JSON.stringify(suggestions));
                sug.filter(function (_) {
                    return _.text.toLowerCase().includes(val.toLowerCase());
                });
                return sug;
            }
            return suggestions;
        }
    }]);

    return AutoComplete;
}(Component);

AutoComplete.propTypes = {
    placeholder: PropTypes.string,
    suggestions: PropTypes.array,
    localKey: PropTypes.string.isRequired,
    onSuggestSelect: PropTypes.func,
    getSuggestionsUrl: PropTypes.string
};

AutoComplete.defaultProps = {
    placeholder: 'Search',
    suggestions: []
};

export default AutoComplete;