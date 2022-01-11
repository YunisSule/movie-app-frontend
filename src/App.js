import './App.css';
import { useState } from 'react';
import Search from './search';
import Results from './results';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import SelectedItem from './selectedItem';
import Home from './home';
const URL = 'http://localhost/movieApp/queries';

function App() {
  const [results, setResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  function handleSubmit(params) {
    axios
      .post(URL + '/getmovies.php', params)
      .then((response) => {
        setResults(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        alert(error);
      });
  }
  function selectMovie(params) {
    axios
      .post(URL + '/getmoviebyid.php', params)
      .then((response) => {
        setSelectedItem(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div className="root">
      <Search handleSubmit={handleSubmit} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results data={results} select={selectMovie} isLoaded={isLoaded} />} />
        <Route path="/item" element={<SelectedItem data={selectedItem} />} />
      </Routes>
    </div>
  );
}
export default App;
