import { useState } from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";

function ProductsList(props) {
  const state = useSelector((state) => state.products);
  const [isMenuCilck, setIsMenuClick] = useState(false);
  const [filterItem, setFilterItem] = useState("All");

  //모달
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");

  function handleMenuClick() {
    setIsMenuClick(!isMenuCilck);
  }

  function closeMenuClik() {
    if (isMenuCilck) {
      setIsMenuClick(false);
    }
  }

  const showModal = () => {
    setModalOpen(true);
  };

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
                  showModal={showModal}
                  setModalSrc={setModalSrc}
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
      {modalOpen && (
        <ProductModal setModalOpen={setModalOpen} modalSrc={modalSrc} />
      )}

      <Footer />
    </div>
  );
}
export default ProductsList;
