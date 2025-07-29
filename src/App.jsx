import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import MainLayout from "./MainLayout";
import About from "./pages/About";
import Login from "./pages/Login";
import PrivateProfile from "./pages/LLD/ProtectedRoute/PrivateProfile";
import FallbackError from "./pages/FallbackError";
import PracticeComp from "./pages/PracticeComp";
import Main from "./FoodApp/pages/Main";
import ItemVariety from "./FoodApp/pages/ItemVariety";
import "./App.css";
import Cart from "./FoodApp/pages/Cart";
import ProtectedRoutes from "./pages/LLD/ProtectedRoute/ProtectedRoutes";
import Language from "./pages/LLD/Language";
import InfiniteScroll from "./pages/LLD/InfiniteScroll/InfiniteScroll";
import Accordion from "./pages/LLD/Accordion/Accordion";
import NestedComment from "./pages/LLD/NestedComments/NestedComment";
import ImageSlider from "./pages/LLD/ImageSlider";
import Pagination from "./pages/LLD/Pagination/Pagination";
import MainFolder from "./pages/LLD/NestedFolder/MainFolder";
import YTLiveChat from "./pages/LLD/YouTube-LiveChat/YTLiveChat";
import AutoComplete from "./pages/LLD/AutoComplete";

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
          path="/accordion"
          element={
            <MainLayout>
              <Accordion />
            </MainLayout>
          }
        />
        <Route
          path="/comment"
          element={
            <MainLayout>
              <NestedComment />
            </MainLayout>
          }
        />
        <Route
          path="/image-slider"
          element={
            <MainLayout>
              <ImageSlider />
            </MainLayout>
          }
        />
        <Route
          path="/pagination"
          element={
            <MainLayout>
              <Pagination />
            </MainLayout>
          }
        />
        <Route
          path="/folder"
          element={
            <MainLayout>
              <MainFolder />
            </MainLayout>
          }
        />
        <Route
          path="/live-chat"
          element={
            <MainLayout>
              <YTLiveChat />
            </MainLayout>
          }
        />
        <Route
          path="/auto-complete"
          element={
            <MainLayout>
              <AutoComplete />
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
