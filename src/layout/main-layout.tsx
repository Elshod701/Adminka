import React, { useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import { MdSubject } from "react-icons/md";
import { SiBrandfolder } from "react-icons/si";
import { FaProductHunt } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <Header>
        <h2 className="header_text" style={{ color: "white " }}>
          ADMIN
        </h2>
      </Header>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <BiSolidCategory />,
                label: <NavLink to={"/app/category"}>Category</NavLink>,
              },
              {
                key: "2",
                icon: <MdSubject />,
                label: <NavLink to={"/app/sub-category"}>Sub category</NavLink>,
              },
              {
                key: "3",
                icon: <FaProductHunt />,
                label: <NavLink to={"/app/product"}>Product</NavLink>,
              },
              {
                key: "4",
                icon: <SiBrandfolder />,
                label: <NavLink to={"/app/brand"}>Brand</NavLink>,
              },
              {
                key: "5",
                icon: <IoNewspaperOutline />,
                label: <NavLink to={"/app/banner"}>Banner</NavLink>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "75.9vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
