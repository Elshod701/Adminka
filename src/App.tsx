import { Route, Routes } from "react-router-dom";
// category
import Category from "./pages/category/category";
import CreateCategory from "./pages/category/create-category";
import EditCategory from "./pages/category/edit-category";
import DeleteCategory from "./pages/category/delete-category";
// brand
import Brand from "./pages/brand/brand";
import BrandEdit from "./pages/brand/brand-edit";
import BrandCreate from "./pages/brand/brand-create";
import BrandDelete from "./pages/brand/brand-delete";
// sub-category
import SubCategory from "./pages/sub-category/sub-category";
import EditSub from "./pages/sub-category/edit-sub";
import CreateSub from "./pages/sub-category/create-sub";
// product
import Product from "./pages/product/product";
import ProductCreate from "./pages/product/product-create";
import ProductEdit from "./pages/product/product-edit";
import ProductDelete from "./pages/product/product-delete";
// others
import Login from "./components/login-form/login";
import MainLayout from "./layout/main-layout";
// hooks
import UseCheckToken from "./hooks/use-check-token";
import UseScrollTop from "./hooks/use-scroll-top";

const App = () => {
  return (
    <>
      <UseCheckToken />
      <UseScrollTop />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<MainLayout />}>
          <Route path="category" element={<Category />} />
          <Route path="category-create" element={<CreateCategory />} />
          <Route path="category-edit/:id" element={<EditCategory />} />
          <Route path="category-delete/:id" element={<DeleteCategory />} />
          <Route path="brand" element={<Brand />} />2
          <Route path="brand-create" element={<BrandCreate />} />
          <Route path="brand-edit/:id" element={<BrandEdit />} />
          <Route path="brand-delete/:id" element={<BrandDelete />} />
          <Route path="sub-category" element={<SubCategory />} />
          <Route path="sub-create" element={<CreateSub />} />
          <Route path="sub-edit/:id" element={<EditSub />} />
          <Route path="product" element={<Product />} />
          <Route path="product-create" element={<ProductCreate />} />
          <Route path="product-edit/:id" element={<ProductEdit />} />
          <Route path="product-delete/:id" element={<ProductDelete />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
