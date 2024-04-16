import React from "react";
import { message } from "antd";
import { usePostBanners } from "../../service/mutation/banner/use-create";
import { useNavigate } from "react-router-dom";
import { BannerType } from "../../types/banner-type";
import BannerForm from "../../components/banner-form/banner-form";

const BannerCreate: React.FC = () => {
  const { mutate, reset, isPending } = usePostBanners();
  const navigate = useNavigate();

  const onFinish = (values: BannerType) => {
    const dataform = new FormData();
    dataform.append("title", String(values?.title));
    dataform.append("description", String(values?.description));
    if (values.image?.file) dataform.append("image", values.image?.file);

    mutate(dataform, {
      onSuccess: () => {
        message.success("Banner added");
        navigate("/app/banner");
        reset();
      },
    });
  };

  return (
    <>
      <BannerForm loading={isPending} onFinish={onFinish} />
    </>
  );
};

export default BannerCreate;
