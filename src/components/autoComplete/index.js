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
            selectedSuggestion: this.props.selectedSuggestion,
            suggestions: this.props.suggestions,
            suggestionsCache: this.props.suggestions,
            inputVal: '',
            inputFocus: false
        };
    }

    onInputChange(e) {
        let val = e.target.value;
        this.setState({ val: val, inputVal: val });
        if (val && val.length > 0) {
            let sug = this.filterSuggestions(this.state.suggestions, val);
            this.setState({ suggestions: sug });
            if (sug.length < 20) {
                this.getSuggestionList(val);
            }
        }
    }

    onSuggestSelect(sugItem, _) {
        if (sugItem) {
            this.setState({ val: '', selectedSuggestion: sugItem, inputVal: sugItem.text, inputFocus: false });
            if (this.props.onSuggestSelect) {
                this.props.onSuggestSelect(sugItem, _);
            }
        }
    }

    onInputFocus = (e) => {
        this.setState({ inputFocus: true });
    }

    render() {
        const { placeholder } = this.props;
        const { suggestions } = this.state;
        return (
            <div className="autoComplete">
                <input type="search" autoComplete
                    value={this.state.inputVal}
                    onFocus={this.onInputFocus}
                    className={'w3-input ' + this.props.className}
                    onChange={this.onInputChange}
                    placeholder={placeholder} />
                {(this.state.val || this.state.inputFocus) && <ul className="w3-ul w3-white w3-border sug">
                    {
                        suggestions && suggestions.map(_ => {
                            return (
                                <div key={uuid.v4()}>
                                    {_.title && <h3>{_.title} </h3>}
                                    {_.suggestions && _.suggestions.map(s =>
                                        <li
                                            onClick={() => this.onSuggestSelect(s, _)}
                                            className="pointer"
                                            key={uuid.v4()}>
                                            {s.text}
                                        </li>)
                                    }
                                    {
                                        (!_.suggestions && <li
                                            onClick={() => this.onSuggestSelect(_)}
                                            className="pointer"
                                            key={uuid.v4()}>
                                            {_.text}
                                        </li>)
                                    }
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
                    this.setState({ suggestions: suggestions, suggestionsCache: suggestions });
                }
                if (this.state.suggestions.length < 20) {
                    if (this.props.getSuggestionsUrl) {
                        axios.get(this.props.getSuggestionsUrl + '?s=' + filterValue).then((response) => {
                            if (response.data) {
                                this.setState({ suggestions: response.data, suggestionsCache: response.data });
                            }
                        }).catch((err) => { });
                    }
                }
            });
        }
    }

    filterSuggestions(suggestions, val) {
        if (val && val.length > 0 && suggestions && suggestions.length > 0) {
            let sug = JSON.parse(JSON.stringify(suggestions));
            let filteredSuggestions = [];
            sug.forEach(parent => {
                const parentSuggestion = [];
                if (parent.suggestions) {
                    const filtered = parent.suggestions.filter(_ => _.text.toLowerCase().includes(val.toLowerCase()));
                    parentSuggestion.push(...filtered);
                }
                if (parentSuggestion.length > 0) {
                    filteredSuggestions.push({ title: parent.title, suggestions: parentSuggestion });
                }
            });
            return filteredSuggestions;
        }
        return this.state.suggestionsCache;
    }
}

AutoComplete.propTypes = {
    placeholder: PropTypes.string,
    suggestions: PropTypes.array,
    className: PropTypes.string,
    localKey: PropTypes.string.isRequired,
    onSuggestSelect: PropTypes.func,
    selectedSuggestion: PropTypes.object,
    getSuggestionsUrl: PropTypes.string
};

AutoComplete.defaultProps = {
    placeholder: 'Search',
    suggestions: []
};

export default AutoComplete;
