import { useState } from 'react';
import { useBooksContext } from '../hooks/use-books-context';

const BookCreate = () => {
  const [title, setTitle] = useState('');

  const { createBook } = useBooksContext();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    createBook(title);
    setTitle('');
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Title</label>
        <input
          type="text"
          id="input"
          className="input"
          value={title}
          onChange={handleChange}
        />
        <button className="button">Add book</button>
      </form>
    </div>
  );
};

export default BookCreate;
