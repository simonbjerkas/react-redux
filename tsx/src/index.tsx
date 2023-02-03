import React from 'react';
import ReactDOM from 'react-dom/client';
// 1) import React and ReactDOM libraries

// 2) Get a reference to to div with ID root
const el = document.getElementById('root') as Element;

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App(): JSX.Element {
  const name = 'Simon';
  const age = 21;
  return (
    <h1>
      Hi, my name is {name}, and I am {age} years old
    </h1>
  );
}

// 5) Show the component on the screen
root.render(<App />);
