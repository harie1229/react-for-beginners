import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

function Movie({ id, coverImage, title, summary, genres }) {
  return (
    <>
      <img src={coverImage} alt={title} />
      <h2>
        <Link to={'/movie/' + id}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Movie;