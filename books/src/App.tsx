import axios from 'axios';
import { useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

export type TBook = {
  id: number;
  title: string;
};

const apiUrl = 'http://localhost:3001/books';

const App = () => {
  const [books, setBooks] = useState<TBook[]>([]);

  const fetchBooks = async (): Promise<void> => {
    const response = await axios.get(apiUrl);
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBookById = (id: number): void => {
    setBooks((prevBooks: TBook[]): TBook[] => {
      return prevBooks.filter((book: TBook, idx: number): Boolean => {
        return book.id !== id;
      });
    });
  };

  const handleCreateBook = async (title: string): Promise<void> => {
    const response = await axios.post(apiUrl, {
      title,
    });
    setBooks((prevBooks: TBook[]): TBook[] => [...prevBooks, response.data]);
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
