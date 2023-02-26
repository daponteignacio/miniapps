import { useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <p>Not found - 404</p>;
  }
  return (
    <div className="  herop animate__animated animate__bounceInLeft">
      <img src={`/assets/${hero.id}.jpg`} />
      <div className="herop-info">
        <h2>{hero.superhero}</h2>
        <h4>{hero.alter_ego}</h4>
        <h5>{hero.first_appearance}</h5>
        <h4 className="text-muted">{hero.publisher}</h4>
        <button className="btn btn-dark mt-4" onClick={handleGoBack}>
          Volver
        </button>
      </div>
    </div>
  );
};
