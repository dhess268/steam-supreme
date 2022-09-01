import { useSelector } from 'react-redux';
import MyListRow from '../components/MyListRow';
// import { fetchGame, fetchGames } from '../action';

const MyList = () => {
  const gamesList = useSelector(({ list }) => list);

  const renderGames = () =>
    gamesList.map((game) => (
      <MyListRow
        name={game.data.name}
        developer={game.data.developers ? game.data.developers[0] : 'N/a'}
        gameId={game.data.steam_appid}
      />
    ));

  return gamesList.length > 0 ? renderGames() : <div>Empty</div>;
};

export default MyList;
