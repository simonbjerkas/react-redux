import { useState } from 'react';
import { TBook } from '../App';
import BookEdit from './BookEdit';

interface IBookShow {
  book: TBook;
  onDelete(id: number): void;
  onEdit(id: number, title: string): void;
}

const BookShow = ({ book, onDelete, onEdit }: IBookShow) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = (): void => {
    onDelete(book.id);
  };

  const handleEditClick = (): void => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id: number, newTitle: string): void => {
    onEdit(id, newTitle);
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
