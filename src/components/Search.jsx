const Search = ({ setSearch }) => {
  return (
    <div>
      <input
        type="text"
        className="search__input"
        placeholder="Search by Firstname and Lastname"
        onChange={setSearch}
      ></input>
    </div>
  );
};

export default Search;
