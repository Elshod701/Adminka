import "./style.scss";
import { useGetSubCategories } from "../../service/query/use-get-sub";
import { Link, useNavigate } from "react-router-dom";
import { Button, Image, Popconfirm, Table, message } from "antd";
import { useState } from "react";
import { useDeleteSub } from "../../service/mutation/sub/use-del-sub";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const SubCategory: React.FC = () => {
  const { data } = useGetSubCategories();
  const navigate = useNavigate();
  const [del, setDel] = useState<number[]>([]);
  const { mutate } = useDeleteSub();

  const useDelSub = () => {
    message.success("Sub-category deleted succesfully");
  };

  const deleteState = (id: number) => {
    mutate(id, {
      onSuccess: () => {
        setDel([...del, id]);
        useDelSub();
      },
    });
  };

  const edit = (id: number) => {
    navigate(`/app/sub-edit/${id}`);
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
  const product = data?.results?.map((item: any) => ({
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
      <Link to={"/app/sub-create"}>
        <Button type="primary" style={{ marginBottom: 16 }}>
          Create
        </Button>
      </Link>
      <Table columns={columns} dataSource={filteredData} />
    </>
  );
};

export default SubCategory;
