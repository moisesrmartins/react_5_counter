import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Counter1 />
    <Counter2 />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
