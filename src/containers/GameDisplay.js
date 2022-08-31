import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { fetchGame } from '../action';

const GameDisplay = () => {
  const gamesData = useSelector(({ games }) => games);
  const currentGame = useSelector(({ game }) => game);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!_.isEmpty(gamesData.entries)) {
      gamesData.order.sort(
        (a, b) =>
          gamesData.entries[a].playtime_forever -
          gamesData.entries[b].playtime_forever
      );
    }
  }, [dispatch, gamesData]);

  const increment = (i) => {
    setIndex(currentGame.index + 1);
  };
  const handleAddToList = () => {
    increment(index);
  };

  const handleSkip = () => {
    increment(index);
  };

  useEffect(() => {
    if (!_.isEmpty(gamesData.order)) {
      dispatch(fetchGame(gamesData.order, index));
    }
  }, [index, dispatch, gamesData.order]);

  const renderEmpty = () => <div>empty</div>;

  const renderCard = () => (
    <div className="card">
      <img
        className="card-img"
        src={currentGame.data.header_image}
        alt="nothing"
      />
      <div className="card-body">
        <h5 className="card-title">{currentGame.data.name}</h5>
        <div className="card-text">
          <div className="">{currentGame.data.developers}</div>
        </div>
        <div>
          <button type="button" onClick={handleAddToList}>
            Add to list
          </button>
          <button type="button" onClick={handleSkip}>
            Skip
          </button>
        </div>
      </div>
    </div>
  );

  return _.isEmpty(currentGame.data) ? renderEmpty() : renderCard();
};

export default GameDisplay;
