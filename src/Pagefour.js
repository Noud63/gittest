import React from "react";
import { useNavigate } from "react-router-dom";

const Pagefour = () => {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/");
  };

  return (
    <div className="pageone">
      <span>Page 4</span>
      <button type="button" className="btn" onClick={nextPage}>
        back
      </button>
    </div>
  );
};

export default Pagefour;
