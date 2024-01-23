import Item from "./item";
const ShowItems = ({ items }) => {
  return (
    <section className="container">
      <div className="items">
        {items.map((item) => {
          return (
            <Item
              id={item.id}
              title={item.title}
              price={item.price}
              img={item.images}
            />
          );
        })}
      </div>
    </section>
  );
};
export default ShowItems;
