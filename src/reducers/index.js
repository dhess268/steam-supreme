import { combineReducers } from 'redux';
import reducers from './root_reducer';

const rootReducer = combineReducers({
  games: reducers.GamesReducer,
  game: reducers.GameReducer,
  list: reducers.ListReducer,
});

export default rootReducer;
