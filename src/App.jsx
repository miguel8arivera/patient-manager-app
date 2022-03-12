import React from "react";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <h1>Quotes for you Pet</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">quote pending</div>
        </div>
      </div>
    </>
  );
}

export default App;
