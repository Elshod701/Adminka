import React from "react";
import "./style.scss";
import {
  Button,
  Form,
  Image,
  Input,
  Select,
  Switch,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";

import { useGetSubCategories } from "../../service/query/use-get-sub";

interface Props {
  onFinish: (values: FildTypeCategory) => void;
  loading: boolean;
  initialValues?: {
    title?: string;
    image?: string;
  };
}

export interface FildTypeCategory {
  id: number;
  image: {
    file: File;
    fileList: FileList;
  };
  title: string;
  price: number;
  is_available: boolean;
  is_new: boolean;
  category: any;
}

const ProductForm: React.FC<Props> = ({ onFinish, initialValues, loading }) => {
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);
  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);
  const { data } = useGetSubCategories();
  const onChange1 = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const onChange2 = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
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
      <Form.Item name="price" label="Price" rules={[{ required: true }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item label="Select sub-category" name="category">
        <Select
          placeholder="Select"
          options={data?.results?.map((e: any) => ({
            value: e.id,
            label: e.title,
          }))}
        />
      </Form.Item>

      <div style={{ display: "flex", gap: "10px" }}>
        <Form.Item label="Is Avialable" name="is_avialable">
          <Switch onChange={onChange1} />
        </Form.Item>
        <Form.Item label="is New" name="is_new">
          <Switch onChange={onChange2} />
        </Form.Item>
      </div>

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

export default ProductForm;
