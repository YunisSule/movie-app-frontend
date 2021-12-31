import { useState } from 'react';

export default function Results({ data }) {
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(data);

  return (
    <div className="results">
      <h1>Movies</h1>

      <div className="movies">
        {data.map((items) => (
          <a href="#" className="movie">
            <h4>{items.title}</h4>
            <img src="https://via.placeholder.com/150" alt="placeholder img" />
            <p>Released: {items.start_year}</p>
            <p>Runtime: {items.runtime_minutes} minutes</p>
          </a>
        ))}
      </div>
    </div>
  );
}
