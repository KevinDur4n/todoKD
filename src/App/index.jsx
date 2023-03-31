//import './App.css';
import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { UI } from "./UI";
import { TodoProvider } from "../context/TodoContext";
function App() {

  return (
    <TodoProvider>
      <UI/>
    </TodoProvider>
  );
}

export default App;
