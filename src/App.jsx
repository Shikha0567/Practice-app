import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import MainLayout from "./MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FallbackError from "./pages/FallbackError";
import PracticeComp from "./pages/PracticeComp";
import Main from "./FoodApp/pages/Main";
import ItemVariety from "./FoodApp/pages/ItemVariety";
import "./App.css";
import Cart from "./FoodApp/pages/Cart";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="/practice"
          element={
            <MainLayout>
              <PracticeComp />
            </MainLayout>
          }
        />
        <Route path="/food-app" element={<Main />} />
        <Route path="/desc" element={<ItemVariety />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<FallbackError />} />
      </Routes>
    </div>
  );
};
export default App;
