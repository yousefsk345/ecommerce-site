import { useEffect, useState } from "react";
import List from "./List";
import Landing from "./landing";
const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);
  const hasItems = items.length > 0;
  return (
    <>
      <Landing items={items} />
      {hasItems ? <List items={items} /> : <h2>Loading...</h2>}
    </>
  );
};

export default App;
