import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGame, fetchGames } from '../action';
import '../App.css';

const SearchBar = () => {
  const [steamID, setSteamID] = useState('');
  const dispatch = useDispatch();

  const handleSubmitButton = (e) => {
    e.preventDefault();
    dispatch(fetchGames('76561198062372443'));
  };

  return (
    <div className="input-group mb-8">
      <input
        type="text"
        className="form-control"
        placeholder="Enter your Steam ID"
        value={steamID}
        onChange={(e) => setSteamID(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={handleSubmitButton}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
