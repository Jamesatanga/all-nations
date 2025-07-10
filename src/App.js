import React from 'react';
import './App.css';
import NewsList from './components/NewsList';

function App() {
  return (
    <div className="App">
      <h1>Latest News</h1>
      <NewsList />
    </div>
  );
}

export default App;