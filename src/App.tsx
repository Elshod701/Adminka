import { Route, Routes } from "react-router-dom";
// category
import Category from "./pages/category/all/category";
import CreateCategory from "./pages/category/create/create-category";
import EditCategory from "./pages/category/edit/edit-category";
import DeleteCategory from "./pages/category/delete/delete-category";
// brand
import Brand from "./pages/brand/all/brand";
import BrandEdit from "./pages/brand/edit/brand-edit";
import BrandCreate from "./pages/brand/create/brand-create";
import BrandDelete from "./pages/brand/delete/brand-delete";
// sub-category
import SubCategory from "./pages/sub-category/all/sub-category";
// product
import Product from "./pages/product/product";
// others
import Login from "./components/login-form/login";
import MainLayout from "./layout/main-layout";
// hooks
import UseCheckToken from "./hooks/use-check-token";
import UseScrollTop from "./hooks/use-scroll-top";
import CreateSub from "./pages/sub-category/create/create-sub";
import EditSub from "./pages/sub-category/edit/edit-sub";

const App = () => {
  return (
    <>
      <UseCheckToken />
      <UseScrollTop />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<MainLayout />}>
          <Route path="category" element={<Category />} />
          <Route path="brand" element={<Brand />} />2
          <Route path="product" element={<Product />} />
          <Route path="category-create" element={<CreateCategory />} />
          <Route path="category-edit/:id" element={<EditCategory />} />
          <Route path="category-delete/:id" element={<DeleteCategory />} />
          <Route path="brand-create" element={<BrandCreate />} />
          <Route path="brand-edit/:id" element={<BrandEdit />} />
          <Route path="brand-delete/:id" element={<BrandDelete />} />
          <Route path="sub-category" element={<SubCategory />} />
          <Route path="sub-create" element={<CreateSub />} />
          <Route path="sub-edit/:id" element={<EditSub />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
