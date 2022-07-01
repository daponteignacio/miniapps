export const ResultItem = ({ title = "", url }) => {
  return (
    <>
      <div className="results__item">
        <div className="results__item-inner">
          <img className="results__front" src={url} alt={title} />
          <div className="results__back">{title}</div>
        </div>
      </div>
    </>
  );
};
