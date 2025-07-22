// 1. import react and react dom
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client"
// 2. get a reference to div with id root
const el = document.getElementById("root")
// 3. tell react to take control of that element.
const root = ReactDOM.createRoot(el)
// 4. show component to the screen
root.render(<App />);