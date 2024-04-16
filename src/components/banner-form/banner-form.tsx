import React from "react";
import "./style.scss";
import {
  Button,
  Form,
  Image,
  Input,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import { BannerType } from "../../types/banner-type";

interface Props {
  onFinish: (values: BannerType) => void;
  loading: boolean;
  initialValues?: {
    title?: string;
    image?: string;
  };
}


const BannerForm: React.FC<Props> = ({ onFinish, initialValues, loading }) => {
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);
  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  return (
    <Form
      name="wrap"
      layout="vertical"
      colon={false}
      style={{ maxWidth: 600 }}
      initialValues={{ title: initialValues?.title }}
      onFinish={onFinish}
    >
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="image"
        label="Upload image..."
        rules={
          initialValues
            ? [{ required: false }]
            : [{ required: true, message: "You were forgot to upload" }]
        }
      >
        <Upload.Dragger
          beforeUpload={() => false}
          multiple={false}
          maxCount={1}
          listType="picture-card"
          onChange={handleChange}
          fileList={fileList}
        >
          <button style={{ border: 0, background: "none" }} type="button">
            <div style={{ marginTop: 8, display: "flex", gap: "10px" }}>
              <span>
                <CloudUploadOutlined />
              </span>
              Upload
            </div>
          </button>
        </Upload.Dragger>
      </Form.Item>
      {initialValues && !fileList.length && <Image src={initialValues.image} />}
      <Form.Item>
        <Button loading={loading} type="primary" htmlType="submit">
          <span>{loading ? "loading..." : "submit"}</span>
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BannerForm;
