import React from "react";
import { useState } from "react";
import { useDeleteCategories } from "../../service/mutation/category/use-delete-categories";
import { useGetCategories } from "../../service/query/use-get-categories";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import notfound from "../../assets/not-found.png";
import {
  Button,
  Image,
  Input,
  Modal,
  Pagination,
  PaginationProps,
  Popconfirm,
  Spin,
  Table,
  message,
} from "antd";
import { useNavigate, Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useGetSearchCategories } from "../../service/query/use-get-search-category";
import "./style.scss";
const { Search } = Input;
const CatygoryList: React.FC = () => {
  const navigate = useNavigate();
  const [del, setDel] = useState<number[]>([]);
  const { mutate } = useDeleteCategories();
  // paginaton
  const [page, setPage] = useState<number>(0);
  const [pagination, setPagination] = useState(1);
  const { data, isLoading } = useGetCategories("id", page);
  // search
  const [value, setValue] = useState("");
  const { data: searchData } = useGetSearchCategories(value);
  console.log(value);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
  const product = data?.data?.results?.map((item) => ({
    title: item.title,
    id: item.id,
    key: item.id,
    image: item.image,
  }));

  const filteredData = product
    ? product.filter((item: any) => !del.includes(item.id))
    : [];

  const name: PaginationProps["onChange"] = (page) => {
    setPagination(page);
    setPage((page - 1) * 5);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to={"/app/category-create"}>
          <Button type="primary" style={{ marginBottom: 16 }}>
            Create
          </Button>
        </Link>
        <div>
          <Button
            type="dashed"
            onClick={showModal}
            style={{ display: "flex", gap: "5px", alignItems: "center" }}
          >
            <IoSearch style={{ fontSize: "16px" }} />
            Search
          </Button>
          <Modal
            title="Search elements"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Search
              value={value}
              onChange={(e) => setValue(e.target.value.trimStart())}
              id="search_input"
              style={{ width: "100%", marginBottom: "20px" }}
              placeholder="Search"
            />
            <div>
              {value.length >= 1 ? (
                <div className="search-result">
                  {searchData?.results && searchData.results.length > 0 ? (
                    searchData.results.map((e) => (
                      <Link
                        to={`/app/category-edit/${e.id}`}
                        className="search-item"
                      >
                        <img src={e.image} alt="" />
                        <p>{e.title}</p>
                      </Link>
                    ))
                  ) : (
                    <img className="error404" src={notfound} alt="" />
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          </Modal>
        </div>
      </div>

      {isLoading ? (
        <Spin fullscreen size="large">
          Loading
        </Spin>
      ) : (
        <Table pagination={false} columns={columns} dataSource={filteredData} />
      )}

      {isLoading ? (
        ""
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Pagination
            onChange={name}
            total={data?.pageSize}
            defaultCurrent={page}
            pageSize={5}
            current={pagination}
          />
        </div>
      )}
    </>
  );
};

export default CatygoryList;
