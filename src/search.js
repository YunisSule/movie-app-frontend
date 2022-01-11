import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const URL = 'http://localhost/movieApp/queries';

export default function Search({ handleSubmit }) {
  const [genres, setGenres] = useState([]);
  const [regions, setRegions] = useState([]);
  const [titleType, setTitleType] = useState([]);
  const [years, setYears] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [formdata, setFormdata] = useState([]);

  useEffect(() => {
    axios
      .get(URL + '/getgenres.php')
      .then((response) => {
        setGenres(response.data);
      })
      .catch((error) => {
        alert(error);
      });

    axios
      .get(URL + '/getregions.php')
      .then((response) => {
        setRegions(response.data);
      })
      .catch((error) => {
        alert(error);
      });

    axios
      .get(URL + '/gettitletypes.php')
      .then((response) => {
        setTitleType(response.data);
      })
      .catch((error) => {
        alert(error);
      });

    axios
      .get(URL + '/getyears.php')
      .then((response) => {
        setYears(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormdata((values) => ({ ...values, [name]: value }));
  }

  if (!isLoaded) {
    return <div className="search-loader"></div>;
  } else {
    return (
      <div id="search">
        <form>
          <select name="genre" id="genre" defaultValue="" onChange={handleChange}>
            <option value="" selected></option>
            {genres.map((item) => (
              <option value={item.genre}>{item.genre}</option>
            ))}
          </select>

          <select name="region" id="region" defaultValue="" onChange={handleChange}>
            {regions.map((item) => (
              <option value={item.region}>{item.region}</option>
            ))}
          </select>
          <select name="title_type" id="title-type" defaultValue="" onChange={handleChange}>
            <option value="" selected></option>
            {titleType.map((item) => (
              <option value={item.title_type}>{item.title_type}</option>
            ))}
          </select>
          <select name="release_year" id="release-year" defaultValue="" onChange={handleChange}>
            <option value="" selected></option>
            {years.map((item) => (
              <option value={item.start_year}>{item.start_year}</option>
            ))}
          </select>
        </form>
        <Link to="/results">
          <button onClick={() => handleSubmit(formdata)}>Search</button>
        </Link>
      </div>
    );
  }
}
