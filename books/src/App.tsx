import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

export type TBook = {
  id: number;
  title: string;
};

const App = () => {
  const [books, setBooks] = useState<TBook[]>([]);

  const deleteBookById = (id: number): void => {
    setBooks((prevBooks: TBook[]): TBook[] => {
      return prevBooks.filter((book: TBook, idx: number): Boolean => {
        return book.id !== id;
      });
    });
  };

  const handleCreateBook = (title: string): void => {
    setBooks((prevBooks: TBook[]): TBook[] => [
      ...prevBooks,
      { id: Math.round(Math.random() * 9999), title },
    ]);
  };

  const editBookById = (id: number, title: string): void => {
    setBooks((prevBooks: TBook[]): TBook[] => {
      return prevBooks.map((book: TBook): TBook => {
        if (book.id === id) {
          return { ...book, title };
        }
        return book;
      });
    });
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
};

export default App;
