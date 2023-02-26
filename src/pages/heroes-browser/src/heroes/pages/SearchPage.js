import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../ui/hooks/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { formData, onInputChange } = useForm({
    termino: "",
  });

  const { termino } = formData;

  const handleSearch = (e) => {
    e.preventDefault();

    if (termino.trim().length <= 1) return;

    navigate(`?q=${termino}`);
  };

  return (
    <div className="row mt-5">
      <div className="col">
        <h1 className="mb-2">Buscar un heroe</h1>

        <form onSubmit={handleSearch}>
          <div className="d-flex">
            <input
              type="text"
              name="termino"
              autoComplete="off"
              className="form-control w-50 mr-3"
              value={termino}
              onChange={onInputChange}
            />
            <button type="submit" className="btn btn-dark">
              Buscar
            </button>
          </div>
        </form>
      </div>
      <div className="col">
        <h1 className="mb-2">Resultado</h1>

        {heroes.length !== 0 ? (
          <div className="alert alert-success" role="alert">
            Resultado de búsqueda
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            No se encontraron resultados
          </div>
        )}

        {heroes?.map((h) => (
          <HeroCard key={h.id} hero={h} />
        ))}
      </div>
    </div>
  );
};
