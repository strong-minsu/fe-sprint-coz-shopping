import { useSelector } from "react-redux";

import "./List.css";
import Card from "./Card";

function List(props) {
  const state = useSelector((state) => state.products);

  //북마크 상관없이 상품, 카테고리, 기획전, 브랜드 4개만 보여줌
  //북마크 안된 상품만 보여주기 <- 진행해야함
  // 근데 왜 이미지가 안뜨냐..
  if (!props.bookmark) {
    let count = 0;
    return (
      <div className="products-list-container">
        <ul className="products-list">
          {state.map((item) => {
            if (count < props.size && !props.bookmarkId.includes(item.id)) {
              // console.log(item);
              count++;
              return (
                <Card
                  showModal={props.showModal}
                  setModalSrc={props.setModalSrc}
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
    );
  }

  //북마크 된 상품, 카테고리, 기획전, 브랜드 4개 보여줌
  else {
    let count = 0;
    return (
      <div className="products-list-container">
        <ul className="products-list">
          {state.map((item) => {
            if (count < props.size && props.bookmarkId.includes(item.id)) {
              count++;
              return (
                <Card
                  showModal={props.showModal}
                  setModalSrc={props.setModalSrc}
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
    );
  }
}
export default List;
