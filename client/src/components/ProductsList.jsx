import List from "./List";
import "./ProductsList.css";

export const ProductsList = (props) => {
  return (
    <div className="main-products-container">
      <h3>상품 리스트</h3>
      <List
        showModal={props.showModal}
        setModalSrc={props.setModalSrc}
        size={4}
        bookmark={false}
        bookmarkId={props.bookmarkId}
        setBookmarkId={props.setBookmarkId}
      />
      <h3>북마크 리스트</h3>
      <List
        showModal={props.showModal}
        setModalSrc={props.setModalSrc}
        size={4}
        bookmark={true}
        bookmarkId={props.bookmarkId}
        setBookmarkId={props.setBookmarkId}
      />
    </div>
  );
};
export default ProductsList;
