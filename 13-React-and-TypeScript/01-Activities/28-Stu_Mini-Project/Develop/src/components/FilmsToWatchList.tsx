//import type React from 'react';
// TODO: Uncomment when Film interface is added
import type Film from '../utils/interfaces/Film.interface';
import FilmCard from './FilmCard';

// TODO: Define watchListFilmProps
interface watchListFilmProps {

  filmsToWatch: Film[];
  removeFromStorage: (film: Film) => void;
  




}

// TODO: Destructure filmsToWatch from props
const FilmsToWatchList = (props: watchListFilmProps) => {
  console.log(props.filmsToWatch);

  return (
    <>
      <ul>
        {props.filmsToWatch.map((film) => (
          <FilmCard
            currentFilm={film}
            key={film.Title}
            onWatchList={true}
            removeFromStorage = {() => props.removeFromStorage(film)}
          
          />
        ))}
      </ul>
    </>
  );
};
 export default FilmsToWatchList;

  