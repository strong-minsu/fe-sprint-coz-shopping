import { useState } from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";
import "react-toastify/dist/ReactToastify.css";

import { toast, ToastContainer } from "react-toastify";

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

  const notify = (itemId) => {
    if (!props.bookmarkId.includes(itemId)) {
      toast("🔴 상품이 북마크에 추가되었습니다.", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast("⭕ 상품이 북마크에서 제거되었습니다.", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
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
                  notify={notify}
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
      <ToastContainer autoClose={5000} />
      <Footer />
    </div>
  );
}
export default ProductsList;
