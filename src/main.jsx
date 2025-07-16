import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { mainStore } from "./utilities/appStore.js";

//check if service worker is present in the browser
if (navigator.serviceWorker) {
  //register sw
  navigator.serviceWorker
    .register("/ServiceWorker.js")
    .then(() => {
      console.log("Service worker registered successfully!");
    })
    .catch((err) => {
      console.log("Service worker registration failed", err);
    });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={mainStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
