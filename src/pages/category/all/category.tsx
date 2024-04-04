import React, { useState } from "react";
import { useDeleteCategories } from "../../../service/mutation/use-delete-categories";
import { useGetCategories } from "../../../service/query/use-get-categories";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Image, Popconfirm, Table, message } from "antd";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.scss";
import { CategoryType } from "../../../types/category-type";

const CatygoryList: React.FC = () => {
  const navigate = useNavigate();
  const [del, setDel] = useState<number[]>([]);
  const { mutate } = useDeleteCategories();
  const { data } = useGetCategories();

  const DelCategory = () => {
    message.success("Category deleted");
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
    navigate(`/app/category-edit/${id}`);
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

export default CatygoryList;
