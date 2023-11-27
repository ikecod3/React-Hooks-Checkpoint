/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";

const MovieList = ({ myMovies }) => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 mx-auto">
        {myMovies.map((item) => (
          <MovieCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
