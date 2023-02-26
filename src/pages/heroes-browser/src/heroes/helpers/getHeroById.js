import { heroes } from "../data/data";

export const getHeroById = (id) => {
  return heroes.find((h) => h.id === id);
};
