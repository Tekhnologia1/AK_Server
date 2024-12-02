import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
const Backpage = ({ mainPage, mainPagePath, currentPage }) => {
const navigate = useNavigate();
return (
    <div className="pb-2 ps-2">
      <span
        onClick={() => navigate(mainPagePath)}
        style={{ color: "#7B3F00", cursor: "pointer" }}
        className="fs-5 fw-bold"
      >
        {mainPage}
      </span>
      <MdNavigateNext
        className="pb-1"
        style={{ color: "#7B3F00", height: "22px", width: "25px" }}
      />
      <span className="fs-5 fw-bold" style={{ color: "#7B3F00" }}>
        {currentPage}
      </span>
    </div>
  );
};

export default Backpage;
