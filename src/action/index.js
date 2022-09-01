import axios from 'axios';

const { REACT_APP_STEAM_API_KEY } = process.env;
export const FETCH_GAMES = 'FETCH_GAMES';
export const FETCH_GAME = 'FETCH_GAME';
export const ADD_TO_LIST = 'ADD_TO_LIST';

export function fetchGames(steamID) {
  const request = axios.get(
    `https://mycorsproxy-dill.herokuapp.com/https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${REACT_APP_STEAM_API_KEY}&steamid=${steamID}&format=json`
  );

  return {
    type: FETCH_GAMES,
    payload: request,
  };
}

export async function fetchGame(order, index = 0) {
  let counter = index;
  let request = await axios.get(
    `https://mycorsproxy-dill.herokuapp.com/https://store.steampowered.com/api/appdetails?appids=${order[counter]}`
  );
  request.index = counter;
  request.disabled = false;
  if (
    request.data[order[counter]].success !== true ||
    request.data[order[counter]].data.type !== 'game'
  ) {
    counter += 1;
    request = await fetchGame(order, counter);
    request = request.payload;
  }
  return {
    type: FETCH_GAME,
    payload: request,
  };
}

export function addToList(game) {
  return {
    type: ADD_TO_LIST,
    payload: game,
  };
}
