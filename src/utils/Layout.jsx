import React, { useRef, useState } from "react";
import {
  EyeOutlined,
  UserOutlined,
  ApiOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Dropdown,
  Layout,
  Menu,
  ConfigProvider,
  theme,
  FloatButton,
  Tour,
} from "antd";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AppContent from "../components/AppContent";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../api";
import { logout } from "../slices/AuthSlice";
const { Header, Content, Footer, Sider } = Layout;

const LayoutComponent = () => {
  const UserImage = useSelector((state) => state.auth.currentUser?.img);
  const authUserName = useSelector((state) => state.auth.currentUser?.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const steps = [
    {
      title: "Dashboard",
      description: "Edit your Resume here.",
      arrow: false,
      target: () => ref1.current,
    },
    {
      title: "Get API",
      description: "Generate your Public API here.",
      arrow: false,
      target: () => ref2.current,
    },
    {
      title: "Template",
      description: "Choose your template here.",
      arrow: false,
      target: () => ref3.current,
    },
    {
      title: "User Profile",
      description: "Hover over the avatar to see your Menu.",
      arrow: false,
      target: () => ref4.current,
    },
  ];

  const items = [
    {
      key: "1",
      label: "Logout",
      icon: <LogoutOutlined />,
    },
  ];
  const NavItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: (
        <NavLink to="/" ref={ref1}>
          Dashboard
        </NavLink>
      ),
    },
    {
      key: "2",
      icon: <ApiOutlined />,
      label: (
        <NavLink to="/get-api" ref={ref2}>
          {" "}
          Get API
        </NavLink>
      ),
    },
    {
      key: "3",
      icon: <ProfileOutlined />,
      label: (
        <NavLink to="/template" ref={ref3}>
          {" "}
          Template
        </NavLink>
      ),
    },
  ];

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          style={{
            backgroundColor: "#fff",
            // boxShadow: "0 0 8px rgba(13, 12, 12, 0.15)",
          }}
        >
          <div className="logo">
            <h1> AK Resume</h1>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={
              useLocation().pathname === "/dashboard"
                ? ["1"]
                : useLocation().pathname === "/get-api"
                ? ["2"]
                : ["3"]
            }
            items={NavItems}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingRight: "1rem",
              backgroundColor: "#fff",
              boxShadow: "0 0 8px rgba(13, 12, 12, 0.15)",
            }}
          >
            {/* <Button
              onClick={handleClick}
              type="primary"
              style={{ marginRight: 16 }}
            >
              {isDarkMode ? "Light" : "Dark"}
            </Button> */}
            <Button
              onClick={() => window.open("resume/" + authUserName, "_blank")}
              type="primary"
              icon={<EyeOutlined />}
              style={{ marginRight: 16 }}
            >
              View Resume
            </Button>
            <Dropdown
              menu={{
                items,
                onClick: ({ key }) => {
                  if (key === "1") {
                    api
                      .get("auth/logout")
                      .then((res) => {
                        if (res.status === 200) {
                          dispatch(logout());
                          document.cookie =
                            "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                          window.location.href = "/sign-in";
                        }
                      })
                      .catch((err) => console.log(err));
                  }
                },
              }}
              placement="bottomLeft"
              arrow
            >
              <Avatar
                size="large"
                src={
                  UserImage
                    ? UserImage
                    : `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${authUserName}`
                }
                icon={<UserOutlined />}
                style={{ cursor: "pointer" }}
                ref={ref4}
              />
            </Dropdown>
          </Header>
          <Content
            style={{
              margin: "24px 16px 0",
              // background: "#fff",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <AppContent />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Arshad khan © {new Date().getFullYear()}
          </Footer>
        </Layout>
        <FloatButton
          icon={<QuestionCircleOutlined />}
          type="default"
          style={{
            right: 10,
          }}
          onClick={() => setOpen(true)}
        />
        <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
      </Layout>
    </ConfigProvider>
  );
};

export default LayoutComponent;
