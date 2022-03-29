import './style/App.css';
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react';
import axios from 'axios'
import DataContext from './component/DataContext'
import Nav from './component/Nav'
import Home from './page/Home'
import Signin from './page/Signin';

const BASE_URL = 'http://localhost:3001/api'

function App() {

  const [signin, setSignin] = useState(false)
  const [search, setSearch] = useState(false)
  const [searchField, setSearchField] = useState("")
  const [results, setResults] = useState([])
  const [user, setUser] = useState([])
  
  return (
    <div className="App">
      <DataContext.Provider value={{BASE_URL, signin, setSignin, searchField, setSearchField, search, setSearch, results, setResults, user, setUser}}>
      <header>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </main>
      </DataContext.Provider>      
    </div>
  );
}

export default App;
