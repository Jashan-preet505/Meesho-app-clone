import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./Header.module.css";
import {useNavigate} from "react-router-dom";

function ProductSearch() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.search_box}>
      <div>
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          id="inputbox"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className={styles.search_icon}>
        <button onClick={handleSearch}>
          <BsSearch fontSize="24px" />
        </button>
      </div>
    </div>
  );
}

export default ProductSearch;

