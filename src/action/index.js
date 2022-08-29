import axios from 'axios';

const { REACT_APP_STEAM_API_KEY } = process.env;
export const FETCH_GAMES = 'FETCH_GAMES';
export const FETCH_GAME = 'FETCH_GAME';

export function fetchGames(steamID) {
  const request = axios.get(
    `https://mycorsproxy-dill.herokuapp.com/https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${REACT_APP_STEAM_API_KEY}&steamid=${steamID}&format=json`
  );

  return {
    type: FETCH_GAMES,
    payload: request,
  };
}

export function fetchGame(gameID) {
  const request = axios.get(
    `https://store.steampowered.com/api/appdetails?appids=${gameID}`
  );

  return {
    type: FETCH_GAME,
    payload: request,
  };
}
