// import MainLayout from "../layout/main-layout";
import Category from "../pages/category/category";
import CreateCategory from "../pages/category/create-category";
import EditCategory from "../pages/category/edit-category";
import DeleteCategory from "../pages/category/delete-category";
import Brand from "../pages/brand/brand";
import BrandDelete from "../pages/brand/brand-delete";
import BrandEdit from "../pages/brand/brand-edit";
import BrandCreate from "../pages/brand/brand-create";
import SubCategory from "../pages/sub-category/sub-category";
import CreateSub from "../pages/sub-category/create-sub";
import EditSub from "../pages/sub-category/edit-sub";
import Product from "../pages/product/product";
import ProductCreate from "../pages/product/product-create";
import ProductEdit from "../pages/product/product-edit";
import ProductDelete from "../pages/product/product-delete";
import Banner from "../pages/banner/banner";
import BannerCreate from "../pages/banner/banner-create";
import { BannerEdit } from "../pages/banner/banner-edit";
import { BannerDelete } from "../pages/banner/banner-delete";

export const routes = [
  {
    path: "category",
    element: <Category />,
  },
  {
    path: "category-create",
    element: <CreateCategory />,
  },
  {
    path: "category-edit/:id",
    element: <EditCategory />,
  },
  {
    path: "category-delete/:id",
    element: <DeleteCategory />,
  },
  {
    path: "brand",
    element: <Brand />,
  },
  {
    path: "brand-create",
    element: <BrandCreate />,
  },
  {
    path: "brand-edit/:id",
    element: <BrandEdit />,
  },
  {
    path: "brand-delete/:id",
    element: <BrandDelete />,
  },
  {
    path: "sub-category",
    element: <SubCategory />,
  },
  {
    path: "sub-create",
    element: <CreateSub />,
  },
  {
    path: "sub-edit/:id",
    element: <EditSub />,
  },
  {
    path: "product",
    element: <Product />,
  },
  {
    path: "product-create",
    element: <ProductCreate />,
  },
  {
    path: "product-edit/:id",
    element: <ProductEdit />,
  },
  {
    path: "product-delete/:id",
    element: <ProductDelete />,
  },
  {
    path: "banner",
    element: <Banner />,
  },
  {
    path: "banner-create",
    element: <BannerCreate />,
  },
  {
    path: "banner-edit/:id",
    element: <BannerEdit />,
  },
  {
    path: "banner-delete/:id",
    element: <BannerDelete />,
  },
];

{
  /* <Route path="category" element={<Category />} />
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
    <Route path="product-delete/:id" element={<ProductDelete />} /> */
}
