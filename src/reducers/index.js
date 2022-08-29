import { combineReducers } from 'redux';
import GameReducer from './root_reducer';

const rootReducer = combineReducers({
  games: GameReducer,
});

export default rootReducer;
