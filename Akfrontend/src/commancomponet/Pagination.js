// Pagination.js
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = React.memo(({ page, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    onPageChange(Math.max(page - 1, 1));
  };

  const handleNext = () => {
    onPageChange(Math.min(page + 1, totalPages));
  };

  return (
    <div className="pt-4">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={handlePrevious} disabled={page === 1}>
              <FaChevronLeft aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </button>
          </li>
          {[...Array(totalPages > 0 ? totalPages : 1)].map((_, index) => (
            <li key={index} className={`page-item ${page === index + 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => onPageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={handleNext} disabled={page === totalPages}>
              <FaChevronRight aria-hidden="true" />
              <span className="sr-only">Next</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
});

export default Pagination;
