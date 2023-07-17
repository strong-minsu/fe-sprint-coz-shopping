import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsList from "../components/ProductsList";
import { useState } from "react";

function Main(props) {
  const [isMenuCilck, setIsMenuClick] = useState(false);

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
      <ProductsList
        bookmarkId={props.bookmarkId}
        setBookmarkId={props.setBookmarkId}
      />
      <Footer />
    </div>
  );
}

export default Main;
