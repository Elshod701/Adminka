import React from "react";
import { useNavigate } from "react-router-dom";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { message } from "antd";
import { useCreateProduct } from "../../../service/mutation/use-post-product";
import GetEditForm from "../../../components/edit-form/edit-form";
import { createCategoryType } from "../../../types/create-category-type";
// import SubList from "../../sub-category/sub-list/sub-list";

const CreateCategory: React.FC = () => {
  const [state, setState] = React.useState("1");
  const [limit, setLimit] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
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
        setLimit(true);
        // navigate("/app/category");
        reset();
      },
    });
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Create Category",
      children: <GetEditForm loading={isPending} onFinish={onFinish} />,
    },
    {
      key: "2",
      label: "Create Sub-category",
      children: <GetEditForm loading={isPending} onFinish={onFinish} />,
      disabled: disabled,
    },
  ];
  React.useEffect(() => {
    if (limit) {
      setState("2");
      setDisabled(false);
    }
  }, [limit]);

  return (
    <>
      <Tabs activeKey={state} items={items} />
    </>
  );
};

export default CreateCategory;
