import React from "react";

function Navigation({ currentPage, setPage }) {
  return (
    <div className="nav-container">
      <button onClick={() => setPage("home")}>🏠</button>
      <button onClick={() => setPage("add")}>➕</button>
      <button onClick={() => setPage("stats")}>📊</button>
      <button onClick={() => setPage("profile")}>👤</button>
      <button onClick={() => setPage("chat")}>💬</button>
    </div>
  );
}

export default Navigation;
