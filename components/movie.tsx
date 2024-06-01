"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../styles/movie.module.css";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

const Movie = ({ title, id, poster_path }: IMovieProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={id} onClick={onClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
};

export default Movie;
