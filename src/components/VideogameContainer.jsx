import React from "react";
import { mockGames } from "../data/games";
import { VideoGameCard } from "./VideoGameCard";
import './VideoGameContainer.scss';


export const VideoGameContainer = () => {
    return (
        <div className="video-game-container">
            {mockGames.map((game) => (
                <VideoGameCard
                    key={game.id}
                    name={game.name}
                    deck={game.deck}
                    image={game.image}
                    youtubeTrailerId={game.youtubeTrailerId}
                />
            ))}
        </div>
    )
}