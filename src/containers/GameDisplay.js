import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import { fetchGame } from '../action';

const GameDisplay = () => {
  const gamesData = useSelector(({ games }) => games);
  const currentGame = useSelector(({ game }) => game);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!_.isEmpty(gamesData.entries)) {
      // debugger;
      gamesData.order.sort(
        (a, b) =>
          gamesData.entries[a].playtime_forever -
          gamesData.entries[b].playtime_forever
      );
      dispatch(fetchGame(gamesData.order[0]));
      gamesData.order.shift();
    }
  }, [dispatch, gamesData]);
  // debugger;

  const handleAddToList = () => {
    dispatch(fetchGame(gamesData.order[0]));
    gamesData.order.shift();
  };

  const handleSkip = () => {
    dispatch(fetchGame(gamesData.order[0]));
    gamesData.order.shift();
  };

  const renderCard = () => (
    <div className="card">
      <img className="card-img" src={currentGame.header_image} alt="nothing" />
      <div className="card-body">
        <h5 className="card-title">{currentGame.name}</h5>
        <div className="card-text">
          <div className="">{currentGame.developers}</div>
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

  return _.isEmpty(currentGame) ? <div>Empty</div> : renderCard();
};

export default GameDisplay;
