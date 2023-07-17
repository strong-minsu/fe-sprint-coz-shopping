import { useState } from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Footer from "../components/Footer";
function ProductsList(props) {
  const state = useSelector((state) => state.products);
  const [isMenuCilck, setIsMenuClick] = useState(false);
  const [filterItem, setFilterItem] = useState("All");

  function handleMenuClick() {
    setIsMenuClick(!isMenuCilck);
  }

  function closeMenuClik() {
    if (isMenuCilck) {
      setIsMenuClick(false);
    }
  }
  return (
    <div onClick={closeMenuClik}>
      <Header handleMenuClick={handleMenuClick} isMenuCilck={isMenuCilck} />
      <Filter filterItem={filterItem} setFilterItem={setFilterItem} />
      <div className="products-list-container">
        <ul className="products-list">
          {state.map((item) => {
            if (filterItem === "All" || item.type === filterItem) {
              return (
                <Card
                  key={item.id}
                  item={item}
                  bookmarkId={props.bookmarkId}
                  setBookmarkId={props.setBookmarkId}
                />
              );
            }
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
export default ProductsList;
