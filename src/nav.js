import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
const Nav = () => {
  const navRef = useRef();
  const handleNav = () => {
    navRef.current.classList.toggle("resp");
  };
  return (
    <div className="nav">
      <h2 className="name">Ecommerce Website</h2>
      <div className="div-bar">
        <FontAwesomeIcon
          className="bar show-bar"
          icon={faBars}
          onClick={handleNav}
        />
      </div>
      <ul ref={navRef}>
        <li className="x-icon" onClick={handleNav}>
          <FontAwesomeIcon icon={faX} />
        </li>
        <li>
          <a href="./">Home</a>
        </li>
        <li>
          <a href="./">Products</a>
        </li>
        <li>
          <a href="./cart">Cart</a>
        </li>
        <li>
          <a href="./">Contact</a>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
