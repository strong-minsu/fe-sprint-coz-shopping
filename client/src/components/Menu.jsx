import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
function Menu() {
  return (
    <div className="dropDownMenu">
      <div className="menuList">
        <li>이민수님, 안녕하세요</li>
        <Link to="/products/list">
          <li>🎁 상품리스트 페이지</li>
        </Link>
        <Link to="/bookmark">
          <li>🌟 북마크 페이지</li>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
