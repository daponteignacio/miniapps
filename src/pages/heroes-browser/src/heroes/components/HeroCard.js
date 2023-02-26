import { Link } from "react-router-dom";

export const HeroCard = ({ hero }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={`assets/${hero.id}.jpg`}
        alt={hero.superhero}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between">
          {hero.superhero}{" "}
          <Link to={`/hero/${hero.id}`}>
            Mas...
          </Link>
        </h5>
        <p className="card-text">{hero.alter_ego}</p>
        {hero.alter_ego !== hero.characters && (
          <p className="card-text">{hero.characters}</p>
        )}
      </div>
    </div>
  );
};
