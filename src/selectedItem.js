export default function SelectedItem(data) {
  return (
    <div className="selected-movie">
      <div className="movie-heading">
        <h1>{data.data.primary_title}</h1>
        <h5>{data.data.original_title}</h5>
      </div>
      <p>
        Rating {data.data.average_rating} ({data.num_votes})
      </p>
      <p>Runtime: {data.data.runtime_minutes} minutes.</p>
      <p>Released: {data.data.start_year}</p>
      <p>Runtime: {data.data.runtime_minutes} minutes.</p>
    </div>
  );
}
