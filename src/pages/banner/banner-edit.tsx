import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tabs } from "antd";
import { message } from "antd";
import { BannerType } from "../../types/banner-type";
import { useEditBanner } from "../../service/mutation/banner/use-edit";
import { useGetBanners } from "../../service/query/use-get-banners";
import type { TabsProps } from "antd";
import BannerEditForm from "../../components/banner-edit-form/edit-form";

const BannerEdit: React.FC = () => {
  const { id } = useParams();
  const { mutate, isPending } = useEditBanner(id as string);
  const { data } = useGetBanners(id as string);
  const navigate = useNavigate();

  const CheckTypeImage = data?.image
    ? typeof data.image === "string"
      ? data.image
      : undefined
    : undefined;

  const onFinish = (data: BannerType) => {
    const form = new FormData();
    form.append("title", data.title);
    if (typeof data.image !== "string" && data.image) {
      form.append("image", data.image.file);
    }
    mutate(form, {
      onSuccess: () => {
        message.success("Edited Banner");
        navigate("/app/banner/");
      },
    });
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Edit Banner",
      children: (
        <BannerEditForm
          loading={isPending}
          onFinish={onFinish}
          initialValues={{
            title: data?.title,
            image: CheckTypeImage,
            description: data?.description,
          }}
        />
      ),
    },
  ];
  2;

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} />
    </>
  );
};

export default BannerEdit;
