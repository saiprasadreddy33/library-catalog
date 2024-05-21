import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/actions/bookActions';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchBooks(query));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search by title or author"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
