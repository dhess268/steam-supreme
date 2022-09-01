import _ from 'lodash';
import { useSelector } from 'react-redux';

const MyList = () => {
  const gamesList = useSelector(({ list }) => list);

  // const renderGames = () =>
  //   gamesList.map((game) => (
  // <MyListRow
  //   name={game.data.name}
  //   developer={game.data.developers ? game.data.developers[0] : 'N/a'}
  //   gameId={game.data.steam_appid}
  // />
  //   ));

  const renderGames = () => {
    if (gamesList.length > 0) {
      return gamesList.map((game) => (
        <tr>
          <td>
            <img
              src={game.data.header_image}
              alt={`${game.data.name} header`}
            />
          </td>
          <td className="table__value">{game.data.name}</td>
          <td className="table__value">{game.data.developers[0]}</td>
          <td className="table__value">
            {game.data.genres.map((genre) => genre.description).join(', ')}
          </td>
        </tr>
      ));
    }
  };

  return (
    <div>
      <h2 className="table__title">Games To Play</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="table__head">Game</th>
            <th className="table__head">Name</th>
            <th className="table__head">Developer</th>
            <th className="table__head">Genre</th>
          </tr>
        </thead>
        <tbody>{renderGames()}</tbody>
      </table>
    </div>
  );
};

export default MyList;
