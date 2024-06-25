import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.scss';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={handleInputChange} 
        placeholder="Search..." 
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
