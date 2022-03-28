import './style/App.css';
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react';
import axios from 'axios'
import DataContext from './component/DataContext'
import Home from './page/Home'
import Nav from './component/Nav'

function App() {

  const [signin, setSignin] = useState(false)
  const [searchField, setSearchField] = useState("")
  const [search, setSearch] = useState(false)
  
  return (
    <div className="App">
      <DataContext.Provider value={{signin, setSignin, searchField, setSearchField, search, setSearch}}>
      <header>
        <Nav />
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
