import "./Card.css";

function Card(props) {
  function bookmarkAddHandler() {
    props.setBookmarkId([...props.bookmarkId, props.item.id]);
  }
  function bookmarkCancleHandler() {
    props.setBookmarkId(
      props.bookmarkId.filter((item) => item !== props.item.id)
    );
  }
  //타입별 카드 내용
  if (props.item.type === "Product") {
    return (
      <div className="card">
        <div className="img-wrapper">
          {props.bookmarkId.includes(props.item.id) ? (
            <i
              className="fa-solid fa-heart btn-isbookmark"
              onClick={bookmarkCancleHandler}
            ></i>
          ) : (
            <i
              className="fa-regular fa-heart btn-bookmark"
              onClick={bookmarkAddHandler}
            ></i>
          )}
          <div>
            <img className="product-img" src={props.item.image_url}></img>
          </div>
        </div>

        <div className="product-title">{props.item.title}</div>
        {props.item.discountPrecentage ? (
          <span className="discount-precentage">
            {props.item.discountPrecentage}%
          </span>
        ) : null}
        <div className="product-price">
          {Number(props.item.price).toLocaleString()}원
        </div>
      </div>
    );
  } else if (props.item.type === "Category") {
    return (
      <div className="card">
        <div className="img-wrapper">
          {props.bookmarkId.includes(props.item.id) ? (
            <i
              className="fa-solid fa-heart btn-isbookmark"
              onClick={bookmarkCancleHandler}
            ></i>
          ) : (
            <i
              className="fa-regular fa-heart btn-bookmark"
              onClick={bookmarkAddHandler}
            ></i>
          )}
          <div>
            <img className="product-img" src={props.item.image_url} />
          </div>
        </div>
        <div className="product-title">#{props.item.title}</div>
      </div>
    );
  } else if (props.item.type === "Exhibition") {
    return (
      <div className="card">
        <div className="img-wrapper">
          {props.bookmarkId.includes(props.item.id) ? (
            <i
              className="fa-solid fa-heart btn-isbookmark"
              onClick={bookmarkCancleHandler}
            ></i>
          ) : (
            <i
              className="fa-regular fa-heart btn-bookmark"
              onClick={bookmarkAddHandler}
            ></i>
          )}
          <div>
            <img className="product-img" src={props.item.image_url} />
          </div>
        </div>
        <div className="product-title">{props.item.title}</div>
        <div className="sub-title">{props.item.sub_title}</div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="img-wrapper">
          {props.bookmarkId.includes(props.item.id) ? (
            <i
              className="fa-solid fa-heart btn-isbookmark"
              onClick={bookmarkCancleHandler}
            ></i>
          ) : (
            <i
              className="fa-regular fa-heart btn-bookmark"
              onClick={bookmarkAddHandler}
            ></i>
          )}
          <div>
            <img className="product-img" src={props.item.brand_image_url} />
          </div>
        </div>
        <div className="product-title">{props.item.brand_name}</div>
        <div className="brand-fllower">{props.item.fllower}</div>
      </div>
    );
  }
}
export default Card;
