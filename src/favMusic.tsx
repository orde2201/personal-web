import { useState } from 'react'
import { useRef } from 'react'
import './App.css'

// Importing images from assets


export function FavoritMusic() {
  const [musicList, setMusicList] = useState([
    { title: 'Naruto', genre: 'Action, Adventure', rating: 8.3 },
    { title: 'One Piece', genre: 'Action, Adventure', rating: 8.7 },
    { title: 'Attack on Titan', genre: 'Action, Drama', rating: 9.0 },
    { title: 'My Hero Academia', genre: 'Action, Superhero', rating: 8.0 },
    { title: 'Demon Slayer', genre: 'Action, Fantasy', rating: 8.5 },
  ])

  return (
    <div className="music-list">
      <h2>My Favorite Music</h2>
      <ul>
        {musicList.map((music, index) => (
          <li key={index}>
            <h3>{music.title}</h3>
            <p>Genre: {music.genre}</p>
            <p>Rating: {music.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
