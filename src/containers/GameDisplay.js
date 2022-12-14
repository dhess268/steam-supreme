import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { fetchGame, addToList } from '../action';

const GameDisplay = () => {
  const gamesData = useSelector(({ games }) => games);
  const currentGame = useSelector(({ game }) => game);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);

  // Ran only when the user enters a steam ID
  useEffect(() => {
    if (!_.isEmpty(gamesData.entries)) {
      gamesData.order.sort(
        (a, b) =>
          gamesData.entries[a].playtime_forever -
          gamesData.entries[b].playtime_forever
      );
      setIndex(0);
    }
  }, [dispatch, gamesData, setIndex]);

  // Ran every time a new game will be shown to the user via the update of index
  useEffect(() => {
    if (!_.isEmpty(gamesData.order) && gamesData.order.length > index) {
      dispatch(fetchGame(gamesData.order, index));
    }
  }, [index, dispatch, gamesData.order]);

  const increment = () => {
    currentGame.disabled = true;
    setIndex(currentGame.index + 1);
  };
  const handleAddToList = () => {
    dispatch(addToList(currentGame));
    increment();
  };

  const handleSkip = () => {
    increment();
  };

  const renderGenres = () => {
    if (currentGame.data.genres) {
      return currentGame.data.genres.map((genre, i) => {
        if (currentGame.data.genres - 1 === i) {
          return <span key={i}>{genre.description}</span>;
        }
        return <span key={i}>{genre.description}, </span>;
      });
    }
  };

  const renderEmpty = () => null;

  const renderCard = () => (
    <section className="card">
      <img
        className="card__img"
        src={currentGame.data.header_image}
        alt={`${currentGame.data.name} steam header`}
      />
      <section className="card__body">
        <h2 className="card__name">{currentGame.data.name}</h2>
        <p className="card__description">
          {currentGame.data.short_description}
        </p>
        <span className="card__developers">
          Developed by: {currentGame.data.developers}
        </span>
        <br />
        <span className="card__genres">Genre: {renderGenres()}</span>
        <section className="card__btn-section">
          <button
            type="button"
            onClick={handleAddToList}
            className="card__btn card__add"
            disabled={currentGame.disabled}
          >
            Add to list
          </button>
          <button
            type="button"
            onClick={handleSkip}
            className="card__btn card__skip"
            disabled={currentGame.disabled}
          >
            Skip
          </button>
        </section>
      </section>
    </section>
  );

  return _.isEmpty(currentGame.data) ? renderEmpty() : renderCard();
};

export default GameDisplay;
