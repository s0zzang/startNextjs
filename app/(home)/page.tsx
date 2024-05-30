"use client";
import { useEffect, useState } from "react";

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export default function Page() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getMovies = async () => {
    const res = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await res.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return <div>{isLoading ? "로딩중 ..." : JSON.stringify(movies)}</div>;
}
