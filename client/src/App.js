import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 경로는 path로 컴포넌트는 element로 연결해 줍니다. */}
          <Route path="/" element={<Main />} />
          {/* <Route path="/" element={<Main />} />
          <Route path="/" element={<Main />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
