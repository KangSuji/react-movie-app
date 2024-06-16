import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, movieTitle, coverImage, summary, genres }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}> {movieTitle}</Link>
      </h2>
      <img src={coverImage} alt={movieTitle} />
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  movieTitle: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
