import { normalize, schema } from 'normalizr';
import _ from 'lodash';
import { FETCH_GAME, FETCH_GAMES, ADD_TO_LIST, RESET_LIST } from '../action';

const defaultState = { entries: {}, order: [] };
const gamesSchema = new schema.Entity('games', undefined, {
  idAttribute: (value) => value.appid,
});

// eslint-disable-next-line default-param-last
const GamesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_GAMES:
      // eslint-disable-next-line no-case-declarations
      const normalizedGames = normalize(
        _.isEmpty(action.payload.data)
          ? {}
          : action.payload.data.response.games,
        [gamesSchema]
      );
      if (normalizedGames.result.length === 0) {
        alert('Invalid steam ID entered');
      }
      return {
        entries: normalizedGames.entities.games,
        order: normalizedGames.result,
      };
    default:
      return state;
  }
};

const initialState = { index: 0 };
// eslint-disable-next-line default-param-last
const GameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GAME:
      return {
        data: payload.data[Object.keys(payload.data)[0]].data,
        index: payload.index,
      };

    default:
      return state;
  }
};
const initialList = [];

// eslint-disable-next-line default-param-last
const ListReducer = (state = initialList, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      return [...state, action.payload];
    case RESET_LIST:
      return [];
    default:
      return state;
  }
};
// export default GamesReducer;
const reducers = {
  GamesReducer,
  GameReducer,
  ListReducer,
};
export default reducers;
