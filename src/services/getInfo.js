export async function getInfo() {
  const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=naruto`);
  const { results } = await response.json();
  console.log(results);
  return results;
}
