import React from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useCreateProduct } from "../../service/mutation/use-post-product";
import { createCategoryType } from "../../types/create-category-type";
import GetEditForm from "../../components/edit-form/edit-form";
// import SubList from "../../sub-category/sub-list/sub-list";

const subcategory: React.FC = () => {
  const navigate = useNavigate();
  const { mutate, reset, isPending } = useCreateProduct();

  const onFinish = (values: createCategoryType) => {
    const dataform = new FormData();
    dataform.append("title", values.title);
    if (values.image) dataform.append("image", values.image.file);
    if (values.parent) {
      dataform.append("parent", String(values.parent));
    }
    mutate(dataform, {
      onSuccess: () => {
        message.success("Added category");
        navigate("/app/category");
        reset();
      },
    });
  };

  return (
    <>
      <GetEditForm loading={isPending} onFinish={onFinish} />
    </>
  );
};

export default subcategory;
