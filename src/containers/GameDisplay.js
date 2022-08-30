import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGame } from '../action';

const GameDisplay = () => {
  const gamesData = useSelector(({ games }) => games);
  const dispatch = useDispatch();
  useEffect(() => {
    gamesData.order.sort(
      (a, b) =>
        gamesData.entries[a].playtime_forever -
        gamesData.entries[b].playtime_forever
    );
  }, [gamesData]);
  // debugger;

  // gamesData.order.forEach((appID) => dispatch(fetchGame(appID)));

  dispatch(fetchGame(gamesData.order[0]));

  return (
    <div className="card">
      {/* <img className="card-img" src={} alt={} /> */}
      <div className="card-body">
        <h5 className="card-title">{}</h5>
        <div className="card-text">
          <div className="">{}</div>
        </div>
        <div>
          <button type="button">Add to list</button>
          <button type="button">Skip</button>
        </div>
      </div>
    </div>
  );
};

export default GameDisplay;
