import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Results({ data, select }) {
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(data);

  return (
    <div className="results">
      <h1>Movies</h1>

      <div className="movies">
        {data.map((item) => (
          <Link to="/item" className="movie" onClick={() => select(item)}>
            <h4>{item.title}</h4>
            <img src="https://via.placeholder.com/150" alt="placeholder img" />
          </Link>
        ))}
      </div>
    </div>
  );
}
