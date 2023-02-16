import { useState } from 'react';
import AnimalShow from './AnimalShow';
import './App.css';

export enum EAnimals {
  bird = 'bird',
  cat = 'cat',
  dog = 'dog',
  cow = 'cow',
  gator = 'gator',
  horse = 'horse',
}

const getRandomAnimal = (): EAnimals => {
  const animals = Object.values(EAnimals);
  return animals[Math.floor(Math.random() * animals.length)];
};

const App = () => {
  const [animals, setAnimals] = useState<EAnimals[]>([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const rederedAnimals = animals.map((animal, idx) => {
    return <AnimalShow type={animal} key={idx} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add animal</button>
      <div className="animal-list">{rederedAnimals}</div>
    </div>
  );
};

export default App;
