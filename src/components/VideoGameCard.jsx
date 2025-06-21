import './videoGameCard.scss';

export const VideoGameCard = ({name, deck, image, youtubeTrailerId})=>{
    const handleClick = ()=>{
        const url = `https://www.youtube.com/watch?v=${youtubeTrailerId}`;
        window.open(url, '_blank');
    };

    return (
        <div onClick={handleClick} className='video-game-card'>
            <img src={image} alt={name} style={{ width: '100%', borderRadius: '6px' }} />
            <h3>{name}</h3>
            <p>{deck}</p>
        </div>
    )
}