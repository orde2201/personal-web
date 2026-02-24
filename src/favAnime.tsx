import { useState } from 'react'
import { useRef } from 'react'
import './App.css'

// Importing images from assets


export default function FavoritAnime() {
  const [animeList, setAnimeList] = useState([
    { title: 'Naruto', genre: 'Action, Adventure', rating: 8.3 },
    { title: 'One Piece', genre: 'Action, Adventure', rating: 8.7 },
    { title: 'Attack on Titan', genre: 'Action, Drama', rating: 9.0 },
    { title: 'My Hero Academia', genre: 'Action, Superhero', rating: 8.0 },
    { title: 'Demon Slayer', genre: 'Action, Fantasy', rating: 8.5 },
  ])

  return (
    <div className="anime-list">
      <h2>My Favorite Anime</h2>
      <ul>
        {animeList.map((anime, index) => (
          <li key={index}>
            <h3>{anime.title}</h3>
            <p>Genre: {anime.genre}</p>
            <p>Rating: {anime.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
