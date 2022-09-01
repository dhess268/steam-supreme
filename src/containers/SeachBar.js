import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGames, resetList } from '../action';

const SearchBar = () => {
  const [steamID, setSteamID] = useState('');
  const dispatch = useDispatch();

  const checkValidNumber = () => {
    if (
      steamID.length === 17 &&
      !Number.isNaN(steamID) &&
      Number.isInteger(parseInt(steamID))
    ) {
      return true;
    }
    alert('Please enter a steam ID number of length 17');
    return false;
  };
  const handleSubmitButton = (e) => {
    e.preventDefault();
    if (checkValidNumber()) {
      dispatch(fetchGames(steamID));
      setSteamID('');
      dispatch(resetList());
    }
  };

  return (
    <form onSubmit={handleSubmitButton} className="search">
      <input
        type="text"
        placeholder="Enter your Steam ID"
        className="search__text"
        value={steamID}
        onChange={(e) => setSteamID(e.target.value)}
      />
      <button type="submit" className="search__btn">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
