import './App.css';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import GameDisplay from './containers/GameDisplay';
import MyList from './containers/MyList';
import SearchBar from './containers/SeachBar';

const App = () => (
  <section className="root">
    <SearchBar />
    <GameDisplay />
    <MyList />
  </section>
);

export default App;
