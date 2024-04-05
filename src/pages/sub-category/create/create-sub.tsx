import React from "react";
import { useNavigate } from "react-router-dom";
import { message, Tabs } from "antd";
import type { TabsProps } from "antd";
import { createCategoryType } from "../../../types/create-category-type";
import GetSubForm from "../../../components/sub-form/sub-form";
import { useCreateSub } from "../../../service/mutation/sub/use-post-sub";

const CreateCategory: React.FC = () => {
  const [state, setState] = React.useState("1");
  const [limit, setLimit] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const navigate = useNavigate();
  const { mutate, reset, isPending } = useCreateSub();
  const [location, setLocation] = React.useState("");

  const onFinish = (data: createCategoryType) => {
    const form = new FormData();
    form.append("title", data.title);
    if (data.image) {
      form.append("image", data.image.file);
    }
    form.append("parent", location);
    mutate(form, {
      onSuccess: () => {
        message.success("Added sub-category");
        navigate("/app/category");
      },
    });
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Create sub-category",
      children: <GetSubForm loading={isPending} onFinish={onFinish} />,
    },
    {
      key: "2",
      label: "Attributes",
      children: <h1>Atrribut form</h1>,
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
