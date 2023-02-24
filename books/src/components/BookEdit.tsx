import { useState } from 'react';
import { TBook } from '../context/books';
import { useBooksContext } from '../hooks/use-books-context';

interface IBookEdit {
  book: TBook;
  onSubmit(): void;
}

const BookEdit = ({ book, onSubmit }: IBookEdit) => {
  const [newTitle, setNewTitle] = useState(book.title);

  const { editBookById } = useBooksContext();

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setNewTitle(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
    onSubmit();
    editBookById(book.id, newTitle);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label htmlFor="title-input">Title</label>
      <input
        type="text"
        className="input"
        id="title-input"
        value={newTitle}
        onChange={handleChange}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
