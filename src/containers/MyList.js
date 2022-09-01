/* eslint-disable arrow-body-style */
// import { useState, useRef } from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
// import MyListRow from '../components/MyListRow';
// import { fetchGame, fetchGames } from '../action';

const MyList = () => {
  const gamesList = useSelector(({ list }) => list);

  // const renderGames = () =>
  //   gamesList.map((game) => (
  //     <MyListRow
  //       name={game.data.name}
  //       developer={game.data.developers[0]}
  //       gameId={game.data.steam_appid}
  //     />
  //   ));
  const renderGames = () => {
    if (gamesList.length > 0) {
      return gamesList.map((game) => (
        <tr>
          <td className="align-middle">{game.data.name}</td>
          <td className="align-middle">{game.data.developers[0]}</td>
          <td className="align-middle">{game.data.steam_appid}</td>
        </tr>
      ));
    }
    return <div>Empty</div>;
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Developer</th>
            <th>Game_ID</th>
          </tr>
        </thead>
        <tbody>{renderGames()}</tbody>
      </table>
    </div>
  );
};

export default MyList;
