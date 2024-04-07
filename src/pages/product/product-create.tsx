import React from "react";
import { message } from "antd";
import { useCreateProduct } from "../../service/mutation/product/use-post-product";
import ProductForm from "../../components/product-form/product-form";
import { useNavigate } from "react-router-dom";
import { createProductType } from "../../types/create-product-type";

const ProductCreate: React.FC = () => {
  const { mutate, reset, isPending } = useCreateProduct();
  const navigate = useNavigate();

  const onFinish = (values: createProductType) => {
    const dataform = new FormData();
    dataform.append("title", values.title);
    dataform.append("category", String(values.category));
    dataform.append("price", String(values.price) ? String(values.price) : "0");
    dataform.append("is_new", values.is_new ? "true" : "false");
    dataform.append("is_avialable", values.is_available ? "true" : "false");

    if (values.image) dataform.append("image", values.image.file);
    mutate(dataform, {
      onSuccess: () => {
        message.success("Added product");
        navigate("/app/product");
        reset();
      },
    });
  };

  return (
    <>
      <ProductForm loading={isPending} onFinish={onFinish} />
    </>
  );
};

export default ProductCreate;
