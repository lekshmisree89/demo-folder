
// TODO: Uncomment when Film interface is added
 import type Film from '../utils/interfaces/Film.interface';
import FilmCard from './FilmCard';

// TODO: Define seenFilmProps
interface seenFilmProps {
  alreadyWatchedFilms: Film[];
  removeFromStorage: (film: Film) => void;
}
// }

// TODO: Destructure alreadyWatchedFilms from props
const FilmsAlreadySeen = ({
  alreadyWatchedFilms,
  removeFromStorage,
}: seenFilmProps) => {
  return (
    <ul>
      {alreadyWatchedFilms.map((film) => (
        <FilmCard
          currentFilm={film}
          key={film.Title}
          onSeenItList={true}
          removeFromStorage={() => removeFromStorage(film)}
        />
      ))}
    </ul>
  );
}


export default FilmsAlreadySeen;
