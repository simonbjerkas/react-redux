import { useState } from 'react';
import './SearchBar.css';

interface ISearchBar {
  onSubmit(term: string): void;
}

const SearchBar = ({ onSubmit }: ISearchBar) => {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
    onSubmit(term);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setTerm(e.currentTarget.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="search">Enter search term</label>
        <input id="search" type="text" value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
