import { Route, Routes } from "react-router-dom";
import Login from "./components/login-form/login";
import UseCheckToken from "./hooks/use-check-token";
import UseScrollTop from "./hooks/use-scroll-top";
import MainLayout from "./layout/main-layout";
import Category from "./pages/category/all/category";
import SubCategory from "./pages/sub-category/sub-category";
import Brand from "./pages/brand/brand";
import Product from "./pages/product/product";
import CreateCategory from "./pages/category/create/create-category";
import EditCategory from "./pages/category/edit/edit-category";
import DeleteCategory from "./pages/category/delete/delete-category";
const App = () => {
  return (
    <>
      <UseCheckToken />
      <UseScrollTop />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<MainLayout />}>
          <Route path="category" element={<Category />} />
          <Route path="sub-category" element={<SubCategory />} />
          <Route path="brand" element={<Brand />} />2
          <Route path="product" element={<Product />} />
          <Route path="category-create" element={<CreateCategory />} />
          <Route path="category-edit/:id" element={<EditCategory />} />
          <Route path="category-delete/:id" element={<DeleteCategory />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
