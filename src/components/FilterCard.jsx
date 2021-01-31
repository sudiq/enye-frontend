import Filter from "./Filter";

const FilterCard = ({ optionsProp }) => {
  const { options, updateOptions } = optionsProp;
  const filterType = Object.keys(options);
  return (
    <div className="filter__card">
      {filterType.map((type) => (
        <Filter
          key={type}
          type={type}
          options={options[type]}
          setOption={updateOptions}
        />
      ))}
    </div>
  );
};
export default FilterCard;
