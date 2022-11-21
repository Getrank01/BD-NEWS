import React, { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [catagory, setcatagory] = useState([]);

  useState(() => {
    fetch("http://localhost:4000/news-catagories")
      .then((res) => res.json())
      .then((data) => setcatagory(data));
  }, []);

  return (
    <div>
      <div>
        {catagory.map((catagory) => (
          <h4 key={catagory.id}>
            <Link to={`/catagory/${catagory.id}`}>{catagory.name}</Link>
          </h4>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
