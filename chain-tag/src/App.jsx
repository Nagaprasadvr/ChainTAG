import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.component";
import { Home } from "./components/Home/Home";
import { DesignPage } from "./components/DesignPage/DesignPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Design from "./components/DesignPage/DesignPage";

require("bootstrap/dist/css/bootstrap.min.css");

function App() {
  return (
    <div>
      <div style={{ height: "150px" }}>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/design" element={<Design />} />
      </Routes>
    </div>
  );
}

export default App;
