import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Image, Table, Tabs } from "antd";
import type { TabsProps } from "antd";
import { message } from "antd";
import GetEditForm from "../../../components/edit-form/edit-form";
import { usePatchCategories } from "../../../service/mutation/category/use-patch-categories";
import { useGetSingleCatProduct } from "../../../service/query/use-get-single-category";
import { ProductType } from "../../../types/product-type";
// import SubList from "../../sub-category/sub-list/sub-list";

const onChange = (key: string) => {
  console.log(key);
};

const EditCategory: React.FC = () => {
  const { id } = useParams();
  const { mutate, isPending } = usePatchCategories(id as string);
  const { data } = useGetSingleCatProduct(id as string);

  const tableBody = data?.children?.map((e) => ({
    key: e.id,
    image: e.image,
    title: e.title,
    id: e.id,
  }));

  const columns: Array<{
    title: string;
    dataIndex: string;
    key: string;
    render?: (data: string) => JSX.Element;
  }> = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "title", key: "title" },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (data: string) => {
        return <Image src={data} style={{ width: 70 }} />;
      },
    },
  ];

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
        message.success("Edited category");
        navigate("/app/category/");
      },
    });
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Edit category",
      children: (
        <GetEditForm
          loading={isPending}
          onFinish={onFinish}
          initialValues={{ title: data?.title, image: CheckTypeImage }}
        />
      ),
    },
    {
      key: "2",
      label: "Category's sub-category",
      children: <Table dataSource={tableBody} columns={columns} />,
    },
  ];
  2;

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
};

export default EditCategory;
