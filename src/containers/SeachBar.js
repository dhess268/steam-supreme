import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGame, fetchGames } from '../action';

const SearchBar = () => {
  const [steamID, setSteamID] = useState('');
  const dispatch = useDispatch();

  const handleSubmitButton = (e) => {
    e.preventDefault();
    dispatch(fetchGames('76561197960434622'));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter your Steam ID"
          value={steamID}
          onChange={(e) => setSteamID(e.target.value)}
        />
        <button type="submit" onClick={handleSubmitButton}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;