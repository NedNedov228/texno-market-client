import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchPage.scss';
import CardList from '../CardsList/CardList';

interface Filter {
  priceRange: number[];
  categories: string[];
}

interface SearchResult {
  photo: string;
  price: string;
  name: string;
}

const SearchPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [filters, setFilters] = useState<Filter>({
    priceRange: [0, 1000],
    categories: [],
  });

  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    // Fetch search results based on query and filters
    // Replace the below line with actual data fetching
    setSearchResults([
      { photo: 'item1.jpg', price: '$10', name: 'Item 1' },
      { photo: 'item2.jpg', price: '$20', name: 'Item 2' },
    ]);
  }, [query, filters]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.split(',').map(Number);
    setFilters((prev) => ({ ...prev, priceRange: value }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      categories: checked
        ? [...prev.categories, value]
        : prev.categories.filter((category) => category !== value),
    }));
  };

  return (
    <div className="search-page">
      <div className="filter-bar">
        <h2>Filters</h2>
        <div className="filter-group">
          <label>Price Range</label>
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.priceRange.join(',')}
            onChange={handlePriceChange}
            multiple
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              value="category1"
              onChange={handleCategoryChange}
            />
            Category 1
          </label>
          <label>
            <input
              type="checkbox"
              value="category2"
              onChange={handleCategoryChange}
            />
            Category 2
          </label>
        </div>
      </div>
      <div className="results">
        <CardList items={searchResults} onButtonClick={(name) => alert(name)} />
      </div>
    </div>
  );
};

export default SearchPage;
