import { API_URL } from "../app/(home)/page";

const getVideos = async (id: string) => {
  // await new Promise((res) => setTimeout(res, 5000));
  // throw new Error("something broke...");
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
};

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getVideos(id);

  return <h6>{JSON.stringify(videos)}</h6>;
};

export default MovieVideos;
