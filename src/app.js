import React from 'react';
import './app.scss';
import Header from './components/Header';
import FindedBooks from './pages/FindedBooks';
import Profile from './pages/Profile';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <Route exact path="/" component={FindedBooks} />
        <Route exact path="/profile" component={Profile} />
      </div>
    </div>
  );
}

export default App;
