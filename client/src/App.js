import CreateAuthor from './components/CreateAuthor';
import Authors from './components/Authors';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Update from './components/Update';
import { useState } from 'react';

function App() {
  const [authors, setAuthors] = useState([]);
  const [author, setAuthor] = useState();
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
          <Route  element={<Authors author={author} setAuthor={setAuthor} authors={authors} setAuthors={setAuthors}/>} path="/"/>
          <Route element={<CreateAuthor authors={authors} setAuthors={setAuthors} />} path="/new"/>
          <Route element={<Update author={author} setAuthor={setAuthor} authors={authors} setAuthors={setAuthors} />} path="/edit/:id"/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
