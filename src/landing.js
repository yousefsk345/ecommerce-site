import pngwing from "./images/pngwing1.png";
import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.jpeg";
import Nav from "./nav";
const Landing = ({ items }) => {
  return (
    <div className="landing">
      <Nav />
      <div className="land">
        <div className="img">
          <img src={pngwing} alt="" />
        </div>
        <div className="details">
          <h2>Yousef Shop</h2>
          <p>This is fake Shop Where you can try to buy some products.</p>
          <div className="items">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
