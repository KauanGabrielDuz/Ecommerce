import React from "react";
import "../styles.css";

export default function FilterBar() {
  return (
    <div className="filter-bar">
      <span>Sorting:</span>

      <div className="sort-options">
        <button>Trending</button>
        <button>Bestsellers</button>
        <button>Lowest Price</button>
        <button>Highest Price</button>
      </div>
    </div>
  );
}
