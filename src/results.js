import { Link } from 'react-router-dom';

export default function Results({ data, select, isLoaded }) {
  console.log(isLoaded);
  console.log(data);

  return (
    <div className="results">
      <h1>Movies</h1>
      {!isLoaded ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="movies">
          {data.map((item) => (
            <Link to="/item" className="movie" onClick={() => select(item)}>
              <h4>{item.title}</h4>
              <img src="https://via.placeholder.com/150" alt="placeholder img" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
