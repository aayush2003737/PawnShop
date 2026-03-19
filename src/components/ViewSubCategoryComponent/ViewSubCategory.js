import './ViewSubCategory.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { __subcategoryapiurl } from '../../API_URL';

function ViewSubCategory() {

  const { cnm } = useParams();
  const [scList, setSubCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(__subcategoryapiurl + "fetch", {
      params: { catnm: cnm }
    })
    .then((response) => {
      setSubCategoryList(response.data.info);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }, [cnm]);  // ✅ IMPORTANT FIX

  return (
  <div className="category-section">

  <h2 className="category-title">Explore {cnm}</h2>
  <p className="category-subtitle">Find products by category</p>

  <div className="category-grid">

    {scList.map((row, index) => (
      <div className="category-card" key={index}>
        
        <img
          src={`../assets/uploads/subcaticons/${row.subcaticonnm}`}
          alt={row.subcatnm}
        />

        <div className="category-name">
          {row.subcatnm}
        </div>

      </div>
    ))}

  </div>

</div>
  );
}

export default ViewSubCategory;