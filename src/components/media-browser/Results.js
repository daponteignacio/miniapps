import { ResultItem } from "./ResultItem";

export const Results = ({ results }) => {
  return (
    <div className="results__container">
      {results?.map((item) => (
        <ResultItem key={item.title} {...item} />
      ))}
    </div>
  );
};
