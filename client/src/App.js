import './style/App.css';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './page/Home'

function App() {
  return (
    <div className="App">
      <header>

      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
