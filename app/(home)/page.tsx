export const metadata = {
  title: "Home",
};
const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovie() {
  await new Promise((res) => setTimeout(res, 3000));

  const res = await fetch(URL);
  const json = await res.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovie();
  return <div>{JSON.stringify(movies)}</div>;
}
