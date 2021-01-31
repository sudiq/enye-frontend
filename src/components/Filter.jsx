const Filter = ({ type, options, setOption }) => {
  const all_options = Object.keys(options);
  return (
    <div className="filter">
      {type.toUpperCase()}
      <div id={type} className="filter__options">
        {all_options.map((option) => (
          <div
            key={option}
            id={option}
            onClick={setOption}
            className={`filter__option ${
              options[option] ? "filter__option__selected" : ""
            }`}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
