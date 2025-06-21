import { useState } from "react";
import { mockGames } from "../data/games";

export const useAutoSuggestGame = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const getSuggestions = (value) => {
        return mockGames.filter((game) =>
            game.name.toLowerCase().includes(value.trim().toLowerCase())
        );
    };

    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    }

    const onSuggestionSelected = (_, { suggestion }) => {
        const youtubeUrl = `https://www.youtube.com/watch?v=${suggestion.youtubeTrailerId}`;
        window.open(youtubeUrl, '_blank');
    };

    const inputProps = {
        placeholder: "Search a game...",
        value: searchTerm,
        onChange: (_, { newValue }) => setSearchTerm(newValue),
    }

    return {
        suggestions,
        inputProps,
        onSuggestionSelected,
        onSuggestionsClearRequested,
        onSuggestionsFetchRequested
    }
}