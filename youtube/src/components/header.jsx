import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logos">
        <img src="/images/logo.png" alt="youtube" />
        <span>Youtube</span>
      </div>
      <div className="search">
        <input type="text" />
        <img src="/images/search.png" alt="search" />
      </div>
    </div>
  );
};

export default Header;
