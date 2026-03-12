import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Pagination.css";

const Pagination = () => {
  const [tableData, setTableData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirststItem = indexOfLastItem - rowsPerPage;
  const currentItems = tableData?.users?.slice(
    indexOfFirststItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(tableData?.total / rowsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const hanleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    axios.get("https://dummyjson.com/users?limit=0").then((res) => {
      console.log(res);
      setTableData(res.data);
    });
  }, []);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((value, index) => (
            <tr key={index}>
              <td>{value.firstName}</td>
              <td>{value.email}</td>
              <td>{value.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            onClick={() => hanleClick(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
