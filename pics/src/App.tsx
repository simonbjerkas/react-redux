import searchImages from './api';
import SearchBar from './components/SearchBar';

const App = () => {
  const handleSubmit = async (term: string) => {
    const result = await searchImages(term);
    console.log(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
