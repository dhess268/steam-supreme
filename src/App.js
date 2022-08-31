import './App.css';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import GameDisplay from './containers/GameDisplay';
import MyList from './containers/MyList';
import SearchBar from './containers/SeachBar';

const App = () => (
  <div>
    <SearchBar /> <GameDisplay /> <MyList />
  </div>
);

export default App;
