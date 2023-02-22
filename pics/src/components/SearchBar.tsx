import { useState } from 'react';

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
