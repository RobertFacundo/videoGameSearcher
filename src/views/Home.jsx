import { InfiniteCarrousel } from "../components/InfiniteCarrousel"
import { SearchBar } from "../components/SearchBar"
import { VideoGameContainer } from "../components/VideogameContainer"
import { Footer } from "../components/Footer";
import './Home.scss';

const gameImages = [
    '/cyberpunk.jpg',
    '/final-fantasy-VII.png',
    '/life-is-strange.jpg',
    '/god-of-war.png',
    '/stray.jpg',
    '/the-last-of-us-II.png'
]

export const Home = () => {
    return (
        <div className="home-container">
            <SearchBar />
            <InfiniteCarrousel images={gameImages} />
            <VideoGameContainer />
            <Footer />
        </div>
    )
}