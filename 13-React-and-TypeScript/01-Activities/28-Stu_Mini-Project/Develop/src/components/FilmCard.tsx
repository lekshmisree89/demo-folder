
//TODO: Uncomment when Film interface is added
import type Film from '../utils/interfaces/Film.interface';
import { IoEyeOutline } from 'react-icons/io5';
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';

// TODO: Define FilmCardProps
 type FilmCardProps = {
  currentFilm: Film;  
  onSeenItList: boolean;
  addToWatchList: () => void;
  addToSeenItList: ( ) => void;
  updateWatchList: (film: Film) => void;
  removeFromStorage: (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    currentlyOnWatchList: boolean | undefined| null,
    currentlyOnSeenItList: boolean| undefined| null,
   title: string |null

  ) => void;
  onWatchList:boolean;
 };

 //define FilmCardProps props 
  const FilmCard = ({ currentFilm, onSeenItList, addToWatchList, addToSeenItList, updateWatchList, removeFromStorage, onWatchList }: FilmCardProps) => {
    
  return (
    <>
      {currentFilm?.Title ? (
        <section className='filmCard'>
          <figure>{/* TODO: Add film poster*/}
          <img src={currentFilm.Poster} alt={currentFilm.Title} />
          </figure>
          <article className='details'>

            {/* TODO: Add film title, director, actors, released, and genre */}
            <h1>{currentFilm.Title}</h1>
            <h2>Director: {currentFilm.Director}</h2>

            <h2>Actors: {currentFilm.Actors}</h2>
            <h2>Released: {currentFilm.Released}</h2>
            <h2>Genre: {currentFilm.Genre}</h2>
          </article>
          <article className='plot'>{/* TODO: Add film plot here */}

          <p>{currentFilm.Plot}</p>

          </article>


          {/* If film is on Watch List or Seen It list film can be removed
              Else film can be added to Watch List or Seen It list */}
          {onWatchList || onSeenItList ? (
            <aside className='icons'>
              {/* TODO: Add remove film from localStorage logic here */}
              <ImCross
                style={{ fontSize: '40px', cursor: 'pointer' }}
                onClick={(e) => {
                  if (onWatchList){
                    updateWatchList(currentFilm);
                  } else if (onSeenItList) {
                    updateSeenItList(currentFilm);
                  }
                  removeFromStorage(e, onWatchList, onSeenItList, currentFilm.Title);
                   

             
            </aside>

          ) : (
            <aside className='icons'>

              {/* TODO: Implement add to WatchList logic here*/}
              
              <CgPlayListAdd style={{ fontSize: '50px', cursor: 'pointer' }}
              onClick = {() => updateWatchList(currentFilm)}

              />
              {/* TODO: Implement add to Seen It list logic here*/}
              <IoEyeOutline style={{ fontSize: '50px', cursor: 'pointer' }}
              onClick = {() => updateSeenItList(currentFilm)}
              />
            </aside>
          )}
        </section>
      ) : (
        <h1 style={{ margin: '16px 0' }}>Please search for a film.</h1>
      )}
    </>
  );
};

export default FilmCard;
