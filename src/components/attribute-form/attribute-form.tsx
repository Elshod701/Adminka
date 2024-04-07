import React from "react";
import "./style.scss";
import { Form } from "react-router-dom";
import { Input } from "antd";

const AttributeForm = () => {
  return (
    <div>
      <Form>
        <Input placeholder="Okey" />
      </Form>
    </div>
  );
};

export default AttributeForm;
