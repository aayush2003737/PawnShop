import './ViewCategory.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { __categoryapiurl } from '../../API_URL';

function ViewCategory() {

  const [cList, setCategoryList] = useState([]);

  useEffect(() => {
    axios.get(__categoryapiurl + "fetch")
      .then((res) => {
        setCategoryList(res.data.info);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="category-page">

      {/* Title */}
      <div className="title-section">
        <h1>Explore Categories</h1>
        <p>Find products by category</p>
      </div>

      {/* Categories Grid */}
      <div className="category-grid">

        {
          cList.map((row, index) => (
            <Link
              to={`/viewsubcategory/${row.catnm}`}
              className="category-card"
              key={index}
            >
              <img
                src={`assets/uploads/caticons/${row.caticonnm}`}
                alt={row.catnm}
              />

              <div className="overlay">
                <h3>{row.catnm}</h3>
              </div>

            </Link>
          ))
        }

      </div>

    </div>
  );
}

export default ViewCategory;