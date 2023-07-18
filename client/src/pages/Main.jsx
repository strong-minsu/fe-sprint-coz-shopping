import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsList from "../components/ProductsList";
import ProductModal from "../components/ProductModal";
import { useState } from "react";

function Main(props) {
  //메뉴
  const [isMenuCilck, setIsMenuClick] = useState(false);

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
      <ProductsList
        showModal={showModal}
        setModalSrc={setModalSrc}
        bookmarkId={props.bookmarkId}
        setBookmarkId={props.setBookmarkId}
      />
      {modalOpen && (
        <ProductModal setModalOpen={setModalOpen} modalSrc={modalSrc} />
      )}
      <Footer />
    </div>
  );
}

export default Main;
