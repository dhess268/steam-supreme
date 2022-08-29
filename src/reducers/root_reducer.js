import { FETCH_GAME, FETCH_GAMES } from '../action';

// eslint-disable-next-line default-param-last
const GameReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_GAMES:
      return action.payload.data;
    case FETCH_GAME:
      return action.payload.data;
    default:
      return state;
  }
};

export default GameReducer;
