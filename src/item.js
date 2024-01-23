import React from "react";
import Details from "./details";

const Item = (props) => {
  const { id, title, price, img } = props;
  const showDetalis = () => {
    <Details props={props}/>
  };
  return (
    <div key={id} className="item">
      {id < 52 && (
        <>
          <img src={img[0]} alt={title} />
          <h2>{title}</h2>
          <div className="box">
            <p>${price}</p>
            <a href="./details" onClick={showDetalis}>
              details
              </a>
          </div>
        </>
      )}
    </div>
  );
};
export default Item;
