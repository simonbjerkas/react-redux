import axios from 'axios';
import { createContext, useCallback, useState } from 'react';

const apiUrl = 'http://localhost:3001/books';

export type TBook = {
  id: number;
  title: string;
};

interface IBooksContext {
  books: TBook[];
  fetchBooks(): Promise<void>;
  editBookById(id: number, title: string): Promise<void>;
  deleteBookById(id: number): Promise<void>;
  createBook(title: string): Promise<void>;
}

const BooksContext = createContext<IBooksContext>({
  books: [],
  fetchBooks: function (): Promise<void> {
    throw new Error('Function not implemented.');
  },
  editBookById: function (id: number, title: string): Promise<void> {
    throw new Error('Function not implemented.');
  },
  deleteBookById: function (id: number): Promise<void> {
    throw new Error('Function not implemented.');
  },
  createBook: function (title: string): Promise<void> {
    throw new Error('Function not implemented.');
  },
});

interface IProvider {
  children: React.ReactNode;
}

const Provider = ({ children }: IProvider) => {
  const [books, setBooks] = useState<TBook[]>([]);

  const fetchBooks = useCallback(async (): Promise<void> => {
    const response = await axios.get(apiUrl);
    setBooks(response.data);
  }, []);

  const editBookById = async (id: number, title: string): Promise<void> => {
    const response = await axios.put(`${apiUrl}/${id}`, { title });

    setBooks((prevBooks: TBook[]): TBook[] => {
      return prevBooks.map((book: TBook): TBook => {
        if (book.id === id) {
          return { ...book, ...response.data };
        }
        return book;
      });
    });
  };

  const deleteBookById = async (id: number): Promise<void> => {
    await axios.delete(`${apiUrl}/${id}`);

    setBooks((prevBooks: TBook[]): TBook[] => {
      return prevBooks.filter((book: TBook, idx: number): Boolean => {
        return book.id !== id;
      });
    });
  };

  const createBook = async (title: string): Promise<void> => {
    const response = await axios.post(apiUrl, {
      title,
    });
    setBooks((prevBooks: TBook[]): TBook[] => [...prevBooks, response.data]);
  };

  const valueToShare: IBooksContext = {
    books,
    fetchBooks,
    editBookById,
    deleteBookById,
    createBook,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
};

export { Provider };
export default BooksContext;
