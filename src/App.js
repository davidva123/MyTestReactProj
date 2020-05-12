import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Buttons from "./components/Buttons";
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default App;
