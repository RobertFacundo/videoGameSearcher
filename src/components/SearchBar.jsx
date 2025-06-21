import React from "react";
import Autosuggest from "react-autosuggest";
import { useAutoSuggestGame } from "../hooks/useSearchBar";
import './SearchBar.scss';

export const SearchBar = () => {
    const {
        suggestions,
        inputProps,
        onSuggestionsFetchRequested,
        onSuggestionsClearRequested,
        onSuggestionSelected,
    } = useAutoSuggestGame();

    return (
        <div className="floating-search-bar">
            <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionSelected={onSuggestionSelected}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={(suggestion)=>suggestion.name}
            renderSuggestion={(suggestion)=> (
                <div className="suggestion-item">
                    <img src={suggestion.image} alt={suggestion.name} className="suggestion-image" />
                    <span>{suggestion.name}</span>
                </div>
            )}
            inputProps={inputProps}
            />
        </div>
    )
}