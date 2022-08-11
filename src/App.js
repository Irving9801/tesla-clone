import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
function App() {
  console.log(process.env.REACT_APP_API_URL,"ENV")
  return (
    <div className="App">
    <Header/>
    <Home/>
    </div>
  );
}

export default App;
