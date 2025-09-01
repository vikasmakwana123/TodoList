import React, { useState } from "react";
import "./Header.css"; // Import styles

const Header = ({ todos, setFilteredTodos }) => {
  const [button, setButton] = useState(false);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");

  const buttonClicked = () => setButton(!button);

  const handleFilter = (type) => {
    setFilterType(type);
    setButton(false);

    let filtered = todos;

    if (type === "Completed") {
      filtered = todos.filter((todo) => todo.isChecked);
    } else if (type === "Pending") {
      filtered = todos.filter((todo) => !todo.isChecked);
    }

    if (search.trim() !== "") {
      filtered = filtered.filter((todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredTodos(filtered);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    let filtered = todos;

    if (filterType === "Completed") {
      filtered = todos.filter((todo) => todo.isChecked);
    } else if (filterType === "Pending") {
      filtered = todos.filter((todo) => !todo.isChecked);
    }

    if (value.trim() !== "") {
      filtered = filtered.filter((todo) =>
        todo.title.toLowerCase().includes(value.toLowerCase())
      );
    }

    setFilteredTodos(filtered);
  };

  return (
    <div className="header">
      {/* Search Box */}
      <div className="search-box">
        <img
          src="./public/searchlogo.svg"
          alt="search"
          className="search-icon"
        />
        <input
          type="text"
          placeholder="Search your todo"
          value={search}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      {/* Filter Dropdown */}
      <div className="filter-container">
        <div className="filter-button" onClick={buttonClicked}>
          {filterType}
          <img
            src={button ? "./public/Up.svg" : "./public/Down.svg"}
            alt="toggle"
            className="dropdown-icon"
          />
        </div>

        {button && (
          <div className="dropdown-menu">
            <div onClick={() => handleFilter("All")}>All</div>
            <div onClick={() => handleFilter("Completed")}>Completed</div>
            <div onClick={() => handleFilter("Pending")}>Pending</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
