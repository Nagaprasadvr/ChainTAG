import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.component";
import { InputForm } from "./components/InputForm/InputForm";
import { Button } from "react-bootstrap";
require("bootstrap/dist/css/bootstrap.min.css");

function App() {
  const CreateTagHandler = () => {
    return <InputForm />;
  };
  return (
    <div>
      <div style={{ height: "150px" }}>
        <Navbar />
      </div>
      <div className="App">
        <h1>
          <b>Create your Digital identity on Solana chain!</b>
        </h1>

        <InputForm />
      </div>
    </div>
  );
}

export default App;
