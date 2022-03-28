import './style/App.css';
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
import DataContext from './component/DataContext'
import Home from './page/Home'

function App() {
  return (
    <div className="App">
      <DataContext.Provider value={{}}>
      <header>

      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </main>
      </DataContext.Provider>      
    </div>
  );
}

export default App;
