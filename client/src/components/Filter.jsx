import all from "../img/filter_img/all.png";
import product from "../img/filter_img/product.png";
import category from "../img/filter_img/category.png";
import exhibition from "../img/filter_img/exhibition.png";
import brand from "../img/filter_img/brand.png";

import "./Filter.css";

function Filter(props) {
  function allFilterHandler() {
    props.setFilterItem("All");
  }

  function productFilterHandler() {
    props.setFilterItem("Product");
  }

  function categoryFilterHandler() {
    props.setFilterItem("Category");
  }

  function exhibitionFilterHandler() {
    props.setFilterItem("Exhibition");
  }

  function brandFilterHandler() {
    props.setFilterItem("Brand");
  }
  return (
    <ul className="filter-container">
      <li className="fiter" onClick={allFilterHandler}>
        <img src={all} />
        <div>전체</div>
      </li>
      <li className="fiter" onClick={productFilterHandler}>
        <img src={product} />
        <div>상품</div>
      </li>
      <li className="fiter" onClick={categoryFilterHandler}>
        <img src={category} />
        <div>카테고리</div>
      </li>
      <li className="fiter" onClick={exhibitionFilterHandler}>
        <img src={exhibition} />
        <div>기획전</div>
      </li>
      <li className="fiter" onClick={brandFilterHandler}>
        <img src={brand} />
        <div>브랜드</div>
      </li>
    </ul>
  );
}

export default Filter;
