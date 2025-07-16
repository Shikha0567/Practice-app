import Header from "../src/pages/Header";
import Home from "../src/pages/Home";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("practice-app/v1").then((cache) => {
      cache.addAll([<Header />, <Home />]);
    })
  );
});

self.addEventListener("activate", (e) => {});

self.addEventListener("fetch", (e) => {});
