import Link from "next/link";
import styles from "../styles/movie.module.css";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

const Movie = ({ title, id, poster_path }: IMovieProps) => {
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={id} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
};

export default Movie;
