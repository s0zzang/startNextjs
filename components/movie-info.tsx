import { API_URL } from "../app/(home)/page";

const getMovie = async (id: string) => {
  await new Promise((res) => setTimeout(res, 2000));
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
};

export default MovieInfo;
