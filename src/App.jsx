import React from "react";
import { Header } from "./components/header";
import { ProductosLista } from "./components/Productos/index";
import "boxicons"; //importamos el icono de boxicons;

import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductosLista />
    </div>
  );
}

export default App;
