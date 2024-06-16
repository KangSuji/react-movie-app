import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoding] = useState(true);
  const [movies, setMoves] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();
    setMoves(json.data.movies);
    setLoding(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loding...</h1>
      ) : (
        <div>
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                movieTitle={movie.title}
                coverImage={movie.medium_cover_image}
                summary={movie.summary}
                genres={movie.genres}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
/**
 * [docs] https://yts.mx/api
https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year
 */
