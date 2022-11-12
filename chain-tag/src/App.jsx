import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.component";
import { InputForm } from "./components/InputForm/InputForm";

require("bootstrap/dist/css/bootstrap.min.css");

function App() {
  return (
    <div>
      <div style={{ height: "150px" }}>
        <Navbar />
      </div>
      <div className="App">
        <h1 className="w3-animate-opacity">
          <b>Create your Digital identity on Solana chain!</b>
        </h1>
        <div className="w3-animate-opacity w3-jumbo">
          <i
            className="fa fa-fingerprint"
            style={{ color: "lightskyblue" }}
          ></i>
        </div>
        <InputForm />
      </div>
    </div>
  );
}

export default App;
