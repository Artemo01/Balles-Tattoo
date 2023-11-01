import { useState } from "react";
import "./App.css";

import NavBar from "./pages/NavBar/NavBar";
import Home from "./pages/Home/Home";

function App() {
  const changePage = (page: any) => {
    setSelectedPage(page);
  };

  const [selectedPage, setSelectedPage] = useState(
    <Home changePage={changePage} />
  );

  return (
    <>
      <NavBar changePage={changePage} />
      {selectedPage}
    </>
  );
}

export default App;
