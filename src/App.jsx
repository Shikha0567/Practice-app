import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import MainLayout from "./MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import PrivateProfile from "./pages/PrivateProfile";
import FallbackError from "./pages/FallbackError";
import PracticeComp from "./pages/PracticeComp";
import Main from "./FoodApp/pages/Main";
import ItemVariety from "./FoodApp/pages/ItemVariety";
import "./App.css";
import Cart from "./FoodApp/pages/Cart";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Language from "./pages/Language";
import InfiniteScroll from "./pages/InfiniteScroll";

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
        <Route path="/login" element={<Login />} />
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
          path="language"
          element={
            <MainLayout>
              <Language />
            </MainLayout>
          }
        />
        <Route
          path="infinite"
          element={
            <MainLayout>
              <InfiniteScroll />
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
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/private"
            element={
              <MainLayout>
                <PrivateProfile />
              </MainLayout>
            }
          />
        </Route>

        <Route path="/food-app" element={<Main />} />
        <Route path="/desc" element={<ItemVariety />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<FallbackError />} />
      </Routes>
    </div>
  );
};
export default App;
