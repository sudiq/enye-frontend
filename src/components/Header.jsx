import Search from "./Search";
import FilterCard from "./FilterCard";

const Header = ({ setSearch, filterProp, optionsProp }) => {
  const { filterDisplay, displayCard } = filterProp;
  return (
    <>
      <div className="header">
        <Search setSearch={setSearch} />
        <div className="filter__icon" onClick={filterDisplay}>
          <span
            className="iconify"
            data-icon="foundation:filter"
            data-inline="false"
            style={{ color: "white" }}
          ></span>
        </div>
      </div>
      {displayCard ? null : <FilterCard optionsProp={optionsProp} />}
    </>
  );
};
export default Header;
