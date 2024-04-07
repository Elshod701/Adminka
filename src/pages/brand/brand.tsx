import "./style.scss";
import React from "react";
import { useState } from "react";
import { useDeleteBrands } from "../../service/mutation/brand/use-delete-brand";
import { useGetBrands } from "../../service/query/use-get-brands";
import { Button, Image, Popconfirm, Table, message } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import { CategoryType } from "../../types/category-type";

const Brand: React.FC = () => {
  const navigate = useNavigate();
  const [del, setDel] = useState<number[]>([]);
  const { mutate } = useDeleteBrands();
  const { data } = useGetBrands();

  const DelCategory = () => {
    message.success("Brand deleted");
  };

  const deleteState = (id: number) => {
    mutate(id, {
      onSuccess: () => {
        setDel([...del, id]);
        DelCategory();
      },
    });
  };

  const edit = (id: number) => {
    navigate(`/app/brand-edit/${id}`);
  };

  const columns = [
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
    {
      title: "Delete",
      dataIndex: "",
      render: (_: number, data: any) => (
        <Popconfirm onConfirm={() => deleteState(data.id)} title="Delete ?">
          <Button type="primary" danger>
            Delete
            <DeleteOutlined />
          </Button>
        </Popconfirm>
      ),
    },
    {
      title: "Edit",
      dataIndex: "",
      render: (_: number, data: any) => (
        <Popconfirm onConfirm={() => edit(data.id)} title="Edit ?">
          <Button type="primary">
            Edit
            <EditOutlined />
          </Button>
        </Popconfirm>
      ),
    },
  ];
  const product = data?.results?.map((item: CategoryType) => ({
    title: item.title,
    id: item.id,
    key: item.id,
    image: item.image,
  }));

  const filteredData = product
    ? product.filter((item: any) => !del.includes(item.id))
    : [];
  return (
    <>
      <Link to={"/app/category-create"}>
        <Button type="primary" style={{ marginBottom: 16 }}>
          Create
        </Button>
      </Link>
      <Table columns={columns} dataSource={filteredData} />
    </>
  );
};

export default Brand;
