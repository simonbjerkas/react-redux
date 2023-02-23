import { TBook } from '../App';
import BookShow from './BookShow';

interface IBookList {
  books: TBook[];
  onDelete(id: number): void;
  onEdit(id: number, title: string): void;
}

const BookList = ({ books, onDelete, onEdit }: IBookList) => {
  const renderedBooks = books.map((book: TBook) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
