import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className="hero-grid">
      {heroes.map((h) => (
        <HeroCard hero={h} key={h.id} />
      ))}
    </div>
  );
};
