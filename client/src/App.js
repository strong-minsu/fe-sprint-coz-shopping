import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import ProductsList from "./pages/ProductsList";
import BookmarkList from "./pages/BookmarkList";
import store from "./store/store";

import { fetchProducts } from "./actions/fetchProducts";
store.dispatch(fetchProducts());

function App() {
  //북마크 아이디, State로 관리!
  const [bookmarkId, setBookmarkId] = useState([
    42, 54, 66, 3, 78, 96, 10, 23, 33, 52, 61, 82, 84, 14, 76, 28,
  ]);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 경로는 path로 컴포넌트는 element로 연결해 줍니다. */}
          <Route
            path="/"
            element={
              <Main bookmarkId={bookmarkId} setBookmarkId={setBookmarkId} />
            }
          />
          <Route
            path="/products/list"
            element={
              <ProductsList
                bookmarkId={bookmarkId}
                setBookmarkId={setBookmarkId}
              />
            }
          />
          <Route
            path="/bookmark/"
            element={
              <BookmarkList
                bookmarkId={bookmarkId}
                setBookmarkId={setBookmarkId}
              />
            }
          />
          {/* <Route path="/" element={<Main />} />
          <Route path="/" element={<Main />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
