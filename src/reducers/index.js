import { combineReducers } from 'redux';
import reducers from './root_reducer';

const rootReducer = combineReducers({
  games: reducers.GamesReducer,
  game: reducers.GameReducer,
});

export default rootReducer;
