import React from "react";
import { usePostLogin } from "../../service/mutation/use-post-login";
// import { loadState, saveState } from "../../lib/lib";
import { Button, Form, Input, message } from "antd";
import { LoginType } from "../../types/login-type";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./login.scss";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = usePostLogin();

  const onFinish = (arg: LoginType) => {
    mutate(arg, {
      onSuccess: (data: any) => {
        Cookies.set("user", data.token, { expires: 1 });
        message.success("Logined succesfully !!!");
        if (Cookies.get("user")) {
          navigate("/app");
        } else if (!Cookies.get("user")) {
          navigate("/");
        }
      },
      onError: () => {
        message.error("Error !!!");
      },
    });
  };

  return (
    <div className="login-bg">
      <Form
        name="normal_login"
        layout="vertical"
        className="login-form"
        onFinish={onFinish}
      >
        <Form.Item
          label="Phone number"
          name="phone_number"
          rules={[{ required: true, message: "Please input your number !!!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password !!!" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={isPending}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
