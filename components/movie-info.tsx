import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

export const getMovie = async (id: string) => {
  await new Promise((res) => setTimeout(res, 2000));
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);
  console.log(movie.genres);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.info}>
        <h2 className={styles.title}>{movie.title}</h2>
        <h3>★ {movie.vote_average.toFixed(1)}</h3>
        <ul>
          {movie["production_companies"].map((item) => {
            <li>
              <img src={item.logo_path} alt={item.name} />
            </li>;
          })}
        </ul>
        <ul>
          {movie["genres"].map((item) => {
            <li>{item.name}</li>;
          })}
        </ul>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
};

export default MovieInfo;
