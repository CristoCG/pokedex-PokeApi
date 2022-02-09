import React from "react";
import "./pagination.css";

export default function Pagination(props) {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div className="pagination">
      <button className="button" onClick={onLeftClick}>
        👈🏻
      </button>
      <span>
        {" "}
        {page} de {totalPages}{" "}
      </span>
      <button className="button" onClick={onRightClick}>
        👉🏻
      </button>
    </div>
  );
}
