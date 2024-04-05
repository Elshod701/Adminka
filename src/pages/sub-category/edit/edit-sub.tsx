import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Image, Table, Tabs } from "antd";
import type { TabsProps } from "antd";
import { message } from "antd";
import GetEditForm from "../../../components/edit-form/edit-form";
import { useGetSingleCatProduct } from "../../../service/query/use-get-single-category";
import { ProductType } from "../../../types/product-type";
import { useEditSub } from "../../../service/mutation/sub/use-edit-sub";
// import SubList from "../../sub-category/sub-list/sub-list";

const onChange = (key: string) => {
  console.log(key);
};

const EditSub: React.FC = () => {
  const { id } = useParams();
  const { mutate, isPending } = useEditSub(id as string);
  const { data } = useGetSingleCatProduct(id as string);

  const CheckTypeImage = data?.image
    ? typeof data.image === "string"
      ? data.image
      : undefined
    : undefined;
  const navigate = useNavigate();

  const onFinish = (data: ProductType) => {
    const form = new FormData();
    form.append("title", data.title);
    if (typeof data.image !== "string" && data.image) {
      form.append("image", data.image.file);
    }
    mutate(form, {
      onSuccess: () => {
        message.success("Sub-category edited");
        navigate("/app/sub-category/");
      },
    });
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Edit sub category",
      children: (
        <GetEditForm
          loading={isPending}
          onFinish={onFinish}
          initialValues={{ title: data?.title, image: CheckTypeImage }}
        />
      ),
    },
  ];
  2;

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
};

export default EditSub;
