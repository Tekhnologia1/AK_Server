// Pagination.js
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './common.css';

const Pagination1 = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav aria-label="Page navigation example" className="custom-pagination">
      <ul className="pagination justify-content-end">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a className="page-link" onClick={() => onPageChange(currentPage - 1)}>
            <FaChevronLeft />
          </a>
        </li>
        {[...Array(totalPages)].map((_, index) => (
          <li className={`page-item ${currentPage === index + 1 ? "active" : ""}`} key={index}>
            <a className="page-link" onClick={() => onPageChange(index + 1)}>
              {index + 1}
            </a>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <a className="page-link" onClick={() => onPageChange(currentPage + 1)}>
            <FaChevronRight />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination1;
