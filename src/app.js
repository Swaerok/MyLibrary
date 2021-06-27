import React from 'react';
import './app.scss';
import Header from './components/Header';
import FindedBooks from './components/FindedBooks';
function App() {
  return (
    <div>
      <Header />
      <FindedBooks />
    </div>
  );
}

export default App;
