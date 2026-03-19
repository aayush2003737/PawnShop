import './ManageUsers.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../API_URL';
import { useNavigate } from "react-router-dom";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(__userapiurl + "fetch", { params: { role: "user" } })
      .then(res => setUsers(res.data.info))
      .catch(console.log);
  });

  // Updated function with confirmation
  const manageUserStatus = (_id, action) => {
    let confirmMessage = "";
    if (action === "active") confirmMessage = "Are you sure you want to activate this user?";
    else if (action === "inactive") confirmMessage = "Are you sure you want to inactivate this user?";
    else if (action === "delete") confirmMessage = "Are you sure you want to delete this user?";

    const confirmed = window.confirm(confirmMessage); // Yes / No popup
    if (!confirmed) return; // If No → cancel

    // Proceed with action
    let data;
    if (action === "active") {
      data = { condition_obj: { _id }, content_obj: { status: 1 } };
      axios.patch(__userapiurl + "update", data).then(() => {
        alert("User profile activated successfully.");
        navigate("/manageusers");
      });
    } else if (action === "inactive") {
      data = { condition_obj: { _id }, content_obj: { status: 0 } };
      axios.patch(__userapiurl + "update", data).then(() => {
        alert("User profile inactivated successfully.");
        navigate("/manageusers");
      });
    } else {
      data = { data: { _id } };
      axios.delete(__userapiurl + "delete", data).then(() => {
        alert("User profile deleted successfully.");
        navigate("/manageusers");
      });
    }
  };

  // Search
  const filteredUsers = users.filter(user =>
    Object.values(user).some(val =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Sorting
  const sortedUsers = [...filteredUsers];
  if (sortConfig.key) {
    sortedUsers.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') direction = 'desc';
    setSortConfig({ key, direction });
  };

  // Pagination
  const indexOfLastUser = currentPage * recordsPerPage;
  const indexOfFirstUser = indexOfLastUser - recordsPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(sortedUsers.length / recordsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="manage-wrapper">
      <div className="manage-card">
        <h2>Manage Users ({users.length} total)</h2>

        <div className="records-control">
          <div>
            <label>Show </label>
            <select
              value={recordsPerPage}
              onChange={(e) => { setRecordsPerPage(Number(e.target.value)); setCurrentPage(1); }}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <label> entries</label>
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
          />
        </div>

        <div className="table-wrapper">
          <table className="user-table">
            <thead>
              <tr>
                {["_id", "name", "email", "mobile", "address", "city", "gender", "info", "status"].map(col => (
                  <th key={col} onClick={() => requestSort(col)}>
                    {col.toUpperCase()}
                    {sortConfig.key === col ? (sortConfig.direction === 'asc' ? ' ▲' : ' ▼') : null}
                  </th>
                ))}
                <th>Action</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map(row => (
                <tr key={row._id}>
                  <td>{row._id}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.mobile}</td>
                  <td>{row.address}</td>
                  <td>{row.city}</td>
                  <td>{row.gender}</td>
                  <td>{row.info}</td>
                  <td className={row.status ? "status-active" : "status-inactive"}>
                    {row.status ? "Active" : "Inactive"}
                  </td>
                  <td>
                    <span
                      className="action-btn change-status"
                      onClick={() => manageUserStatus(row._id, row.status ? 'inactive' : 'active')}
                    >
                      Change
                    </span>
                  </td>
                  <td>
                    <span
                      className="action-btn delete-user"
                      onClick={() => manageUserStatus(row._id, 'delete')}
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              ))}
              {currentUsers.length === 0 && (
                <tr>
                  <td colSpan="12" style={{ textAlign: "center" }}>No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? "page-btn active-page" : "page-btn"}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ManageUsers;