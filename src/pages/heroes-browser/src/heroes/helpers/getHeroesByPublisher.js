import { heroes } from '../data/data';

export const getHeroesByPublisher = (publisher) => {
  if (publisher !== "Marvel Comics" && publisher !== "DC Comics") {
    throw new Error("No existe una editorial llamada", publisher);
  }

  return heroes.filter((heroe) => heroe.publisher === publisher);
};
