import { useSelector } from 'react-redux';

const MyList = () => {
  const gamesList = useSelector(({ list }) => list);

  const renderGames = () => {
    if (gamesList.length > 0) {
      return gamesList.map((game, index) => (
        <tr key={index}>
          <td>
            <a
              href={`https://store.steampowered.com/app/${game.data.steam_appid}/${game.data.name}/`}
              className="table__image-link"
            >
              <img
                src={game.data.header_image}
                alt={`${game.data.name} header`}
                className="table__image"
              />
            </a>
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

  return gamesList.length > 0 ? (
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
  ) : null;
};

export default MyList;
