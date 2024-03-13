import { Link } from "react-router-dom";

function Cards({ list, pathName, icon }) {
  return (
    <div className="indiCards">
      <h5>For {list}</h5>
      <div className="icon">
        {icon}
      </div>
      <Link to={pathName}>Click Here</Link>
    </div>
  )
}

export default Cards;
