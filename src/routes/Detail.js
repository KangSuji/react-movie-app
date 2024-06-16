import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  console.log(id);
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    console.log(json);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <div>Detail</div>;
}
export default Detail;
