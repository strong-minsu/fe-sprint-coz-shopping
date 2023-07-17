import axios from "axios";

//action에서 불러옴!
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
} from "./actions";

//fetch 불러오기!
export const fetchProducts = () => {
  return (dispatch) => {
    //dispatch로 요청 action객체를 reducer에 전달
    dispatch(fetchProductsRequest());

    //axios로 서버에서 데이터 불러오기
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?")
      .then((res) => {
        //성공적으로 데이터를 받아옴
        // fetchProducts()에 인자로 res.data를 전달 -> payload: { res.data }
        dispatch(fetchProductsSuccess(res.data));
        console.log(res.data);
      })
      .catch((error) => {
        dispatch(fetchProductsError(error));
      });
  };
};
