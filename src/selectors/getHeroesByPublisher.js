import { heroes } from "../components/data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`El publicher "${publisher}" no es válido`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
