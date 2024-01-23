import Nav from "./nav";

const Details = (props) => {
return (
  <div>
    <div className="nav">
      <Nav />
    </div>
    {props.id}
  </div>
);
}
export default Details;