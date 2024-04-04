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
  message,
} from "antd";

interface Props {
  onFinish: (values: FildTypeCategory) => void;
  loading: boolean;
  initialValues?: {
    title?: string;
    image?: string;
  };
}

export interface FildTypeCategory {
  title: string;
  image?: {
    file: File;
  };
  parent?: number;
}

const GetEditForm: React.FC<Props> = ({ onFinish, initialValues, loading }) => {
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
      <Form.Item
        name="title"
        label="Category Name..."
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
            <div style={{ marginTop: 8 }}>Upload</div>
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

export default GetEditForm;
