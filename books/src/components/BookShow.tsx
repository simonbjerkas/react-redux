import { TBook } from '../App';

interface IBookShow {
  book: TBook;
  onDelete(id: number): void;
}

const BookShow = ({ book, onDelete }: IBookShow) => {
  const handleClick = (): void => {
    onDelete(book.id);
  };

  return (
    <div className="book-show">
      {book.title}
      <div className="actions">
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
