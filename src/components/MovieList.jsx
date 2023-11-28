/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";

const MovieList = ({ myMovies }) => {
  return (
    <div className="max-w-6xl mx-auto px-8 ">
      <div className="grid sm:flex-col md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 place-content-center mx-8">
        {myMovies.map((item) => (
          <MovieCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
