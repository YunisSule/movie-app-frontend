import './App.css';
import { useState, useEffect } from 'react';
import Search from './search';
import Results from './results';
import axios from 'axios';
const URL = 'http://localhost/movieApp/queries';

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {}, []);

  function handleSubmit(params) {
    axios
      .post(URL + '/getmovies.php', params)
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div className="root">
      <Search handleSubmit={handleSubmit} />
      <Results data={results} />
    </div>
  );
}
export default App;
