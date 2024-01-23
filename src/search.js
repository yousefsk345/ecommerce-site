import ShowItems from "./showItems";

const Search = ({ items, value, setValue }) => {
  const handleSearch = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <div className="search">
        <input
          placeholder="Search..."
          type="text"
          value={value}
          onChange={(e) => handleSearch(e)}
        />
      </div>
      {value.length > 0 && (
        <ShowItems
          items={items.filter((item) =>
            item.title.includes(value)
          )}
        />
      )}
    </div>
  );
};
export default Search;
