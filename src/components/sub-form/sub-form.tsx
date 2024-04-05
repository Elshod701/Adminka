import React from "react";
import "./style.scss";
import {
  Button,
  Form,
  Image,
  Input,
  Select,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import { useGetCategories } from "../../service/query/use-get-categories";
import { FildTypeCategory } from "../edit-form/edit-form";
import { nanoid } from "nanoid";

interface Props {
  onFinish: (values: FildTypeCategory) => void;
  loading: boolean;
  initialValues?: {
    title?: string;
    image?: string;
  };
}

const GetSubForm: React.FC<Props> = ({ onFinish, initialValues, loading }) => {
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);
  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);
  const { data } = useGetCategories();

  return (
    <Form
      name="wrap"
      layout="vertical"
      colon={false}
      style={{ maxWidth: 600 }}
      initialValues={{ title: initialValues?.title }}
      onFinish={onFinish}
    >
      <Form.Item
        name="title"
        label="Sub-category name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="select"
        label="Select category"
        rules={[{ required: true }]}
      >
        <Select
          options={data?.results?.map((e: any) => ({
            value: e.id,
            label: e.title,
          }))}
        />
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

export default GetSubForm;
