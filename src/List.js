import { useState } from "react";
import Search from "./search";
import ShowItems from "./showItems";

const List = ({ items }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <Search items={items} value={value} setValue={setValue} />
        {value.length === 0 && <ShowItems items={items}/>}
    </>
  );
};
export default List;
