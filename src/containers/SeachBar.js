import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGames } from '../action';

const SearchBar = () => {
  const [steamID, setSteamID] = useState('');
  const dispatch = useDispatch();

  const handleSubmitButton = (e) => {
    e.preventDefault();
    dispatch(fetchGames(steamID));
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

    // <div className="input-group mb-8">
    //   <input
    //     type="text"
    //     className="form-control"
    //     placeholder="Enter your Steam ID"
    //     value={steamID}
    //     onChange={(e) => setSteamID(e.target.value)}
    //   />
    //   <button
    //     type="submit"
    //     className="btn btn-outline-secondary"
    //     onClick={handleSubmitButton}
    //   >
    //     Search
    //   </button>
    // </div>
  );
};

export default SearchBar;
