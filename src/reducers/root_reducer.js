import { normalize, schema } from 'normalizr';
import { FETCH_GAME, FETCH_GAMES } from '../action';

const defaultState = { entries: {}, order: [] };
const gamesSchema = new schema.Entity('games', undefined, {
  idAttribute: (value) => value.appid,
});

// eslint-disable-next-line default-param-last
const GamesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_GAMES:
      // eslint-disable-next-line no-case-declarations
      const normalizedGames = normalize(action.payload.data.response.games, [
        gamesSchema,
      ]);
      return {
        entries: normalizedGames.entities.games,
        order: normalizedGames.result,
      };
    default:
      return state;
  }
};

const initialState = {};
// eslint-disable-next-line default-param-last
const GameReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAME:
      return {
        header_image: action.payload.data.header_image,
        developers: action.payload.data.developers,
        publishers: action.payload.data.publishers,
      };
    default:
      return state;
  }
};
// export default GamesReducer;
const reducers = {
  GamesReducer,
  GameReducer,
};
export default reducers;
