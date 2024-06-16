import { useCallback, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import style from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoding] = useState(true);
  const [movieData, setMovieData] = useState();

  const getMovieData = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovieData(json.data.movie);
    setLoding(false);
  }, [id]);

  useEffect(() => {
    getMovieData();
  }, [getMovieData]);
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Link to="/" className={style.homeBtn}>
          ←
        </Link>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className={style.inner_wrapper}>
            <img src={movieData.large_cover_image} alt={movieData.title} />
            <div className={style.content}>
              <div className={style.title}>{movieData.title_long}</div>
              <div className={style.rating}>
                <span>Rating</span>
                {movieData.rating}
              </div>
              <ul className={style.genres}>
                {movieData.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
              <p>{movieData.description_full}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Detail;
