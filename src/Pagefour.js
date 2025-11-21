import React from "react";
import { useNavigate } from "react-router-dom";

const Pagefour = () => {
  const navigate = useNavigate();

  const prevPage = () => {
    navigate("/pagethree/3");
  };

  const homePage = () => {
    navigate("/");
  };

  return (
    <div className="pageone">
      <span>Page 4</span>
      <div className="btnBox">
        <button type="button" className="btn" onClick={prevPage}>
          back
        </button>
        <button type="button" className="btn" onClick={homePage}>
          home
        </button>
      </div>
    </div>
  );
};

export default Pagefour;
