import { useState } from 'react';

interface IBookCreate {
  onCreate(title: string): void;
}

const BookCreate = ({ onCreate }: IBookCreate) => {
  const [title, setTitle] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    onCreate(title);
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
