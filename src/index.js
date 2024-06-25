import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./header";
import Counter from "./counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Header />
      <Counter />
    </div>
  </React.StrictMode>
);
