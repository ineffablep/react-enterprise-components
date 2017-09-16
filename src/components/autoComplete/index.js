import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import localforage from 'localforage';
import axios from 'axios';

class AutoComplete extends Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSuggestSelect = this.onSuggestSelect.bind(this);

        this.state = {
            val: '',
            suggestions: this.props.suggestions
        };
    }

    onInputChange(e) {
        let val = e.target.value;
        if (val && val.length > 1) {
            let sug = this.filterSuggestions(this.state.suggestions);
            if (sug.length < 20) {
                this.setState({ val: val });
                this.getSuggestionList(val);
            } else {
                this.setState({ val: val, suggestions: sug });
            }
        }
    }

    onSuggestSelect(sugItem) {
        if (sugItem) {
            this.setState({ val: '' });
            if (this.props.onSuggestSelect) {
                this.props.onSuggestSelect(sugItem);
            }
        }
    }

    render() {
        const { placeholder } = this.props;
        const { suggestions } = this.state;
        return (
            <div className="autoComplete">
                <input type="search" autoComplete
                    className="w3-input" onChange={this.onInputChange}
                    placeholder={placeholder} />
                {this.state.val && <ul className="w3-ul w3-white w3-border sug">
                    {
                        suggestions && suggestions.map(_ => {
                            return (
                                <div key={uuid.v4()}>
                                    <h3>{_.title} </h3>
                                    {_.suggestions.map(s =>
                                        <li
                                            onClick={() => this.onSuggestSelect(_)}
                                            className="pointer"
                                            key={uuid.v4()}>
                                            {s.text}
                                        </li>)}
                                </div>);
                        })
                    }
                </ul>
                }
            </div>
        );
    }

    getSuggestionList(filterValue) {
        if (filterValue) {
            localforage.getItem(this.props.localKey).then((err, sugList) => {
                if (!err && sugList) {
                    let suggestions = this.filterSuggestions(sugList, filterValue);
                    this.setState({ suggestions: suggestions });
                }
                if (this.state.suggestions.length < 20) {
                    axios.get(this.props.getSuggestionsUrl + '?s=' + filterValue).then((response) => {
                        if (response.data) {
                            this.setState({ suggestions: response.data });
                        } else {
                            this.setState({ suggestions: response });
                        }
                    }).catch((err) => { });
                }
            });
        }
    }

    filterSuggestions(suggestions, val) {
        if (suggestions && suggestions.length > 0) {
            let sug = JSON.parse(JSON.stringify(suggestions));
            sug.filter(_ => _.text.toLowerCase().includes(val.toLowerCase()));
            return sug;
        }
        return suggestions;
    }
}

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
