import { useState } from 'react';
import { TBook } from '../context/books';
import { useBooksContext } from '../hooks/use-books-context';
import BookEdit from './BookEdit';

interface IBookShow {
  book: TBook;
}

const BookShow = ({ book }: IBookShow) => {
  const [showEdit, setShowEdit] = useState(false);

  const { deleteBookById } = useBooksContext();

  const handleDeleteClick = (): void => {
    deleteBookById(book.id);
  };

  const handleEditClick = (): void => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (): void => {
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      <div>
        {showEdit ? (
          <BookEdit book={book} onSubmit={handleSubmit} />
        ) : (
          <h3>{book.title}</h3>
        )}
      </div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
