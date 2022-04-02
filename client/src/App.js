import './style/App.css';
import { Routes, Route } from 'react-router-dom'
import { useState, useContext } from 'react';
import DataContext from './component/DataContext'
import Nav from './component/Nav'
import Home from './page/Home'
import Signin from './page/Signin'
import Signout from './page/Signout'
import Register from './page/Register';
import BookPage from './page/BookPage';
import MyLibrary from './page/MyLibrary';

// const BASE_URL = 'http://localhost:3001/api'
const BASE_URL = '/api'

function App() {

  const [signin, setSignin] = useState(false)
  const [search, setSearch] = useState(false)
  const [searchField, setSearchField] = useState("")
  const [results, setResults] = useState([])
  const [user, setUser] = useState([])
  const [currentBook, setCurrentBook] = useState({
    title: "",
    book_cover: "",
    description: "",
    genre: [],
    author: ""
  })
  
  return (
    <div className="App">
      <DataContext.Provider value={{BASE_URL, signin, setSignin, searchField, setSearchField, search, setSearch, results, setResults, user, setUser, currentBook, setCurrentBook}}>
      <header>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signout' element={<Signout />}/>
          <Route path='/register' element={<Register />}/>
          <Route path={`/${user.username}/my_library`} element={<MyLibrary />} />
          <Route path={`/book/:id`} element={<BookPage />} />
        </Routes>
      </main>
      </DataContext.Provider>      
    </div>
  );
}

export default App;
