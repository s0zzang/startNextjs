import { API_URL } from "../../../(home)/page";

const getMovie = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

const getVideos = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
};

const MovieDetail = async ({ params: { id } }: { params: { id: string } }) => {
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return (
    <>
      <h1>{movie.title}</h1>
      <p>{videos.title}</p>
    </>
  );
};

export default MovieDetail;
