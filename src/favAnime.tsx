import { useState, useEffect } from 'react'
import './favanime.css'
import xmlString from './assets/animelist.xml?raw'

export default function FavoritAnime() {
  // Biarkan TypeScript menginfer tipe dari initial value
  const [animeList, setAnimeList] = useState<{ title: string }[]>([]);

  useEffect(() => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    
    const titleElements = xmlDoc.getElementsByTagName('series_title');
    
    // Explicitly type the array
    const animeArray: { title: string }[] = [];
    for (let i = 0; i < titleElements.length; i++) {
      const title = titleElements[i].textContent;
      if (title) {
        animeArray.push({ title });
      }
    }
    
    setAnimeList(animeArray);
  }, []);

  return (
    <div className="anime-list">
      <h2 className='title'>My Favorite Anime</h2>
      <ul>
        {animeList.map((anime, index) => (
          <li key={index}>
            <p>{anime.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}