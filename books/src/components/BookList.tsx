import { TBook } from '../App';
import BookShow from './BookShow';

interface IBookList {
  books: TBook[];
  onDelete(id: number): void;
}

const BookList = ({ books, onDelete }: IBookList) => {
  const renderedBooks = books.map((book: TBook) => {
    return <BookShow key={book.id} book={book} onDelete={onDelete} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
