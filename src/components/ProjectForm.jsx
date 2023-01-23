import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space, Typography } from "antd";
const { Title } = Typography;
const ProjectForm = () => {
  return (
    <>
      <Title level={3}>Add your Frontend Projects</Title>
      <Form.List
        name="frontEnd"
        rules={[
          {
            validator: async (_, users) => {
              if (!users || users.length < 2) {
                return Promise.reject(new Error("At least 2 Frontend Projects is required"));
              } else if (users.length > 5) {
                return Promise.reject(new Error("At most 5 users"));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: "flex",
                  marginBottom: 8,
                  alignItems: "center",
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  boxShadow: "0 0 8px rgba(13, 12, 12, 0.15)",
                }}
                align="baseline"
                size="large"
                wrap
              >
                <Form.Item
                  {...restField}
                  name={[name, "name"]}
                  label="project Name"
                  rules={[
                    {
                      required: true,
                      message: "Project Name is required",
                    },
                  ]}
                >
                  <Input placeholder="Project Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "link"]}
                  label="Project Link"
                  rules={[
                    {
                      required: true,
                      message: "Project Link is required",
                    },
                  ]}
                >
                  <Input placeholder="Project Link" />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              {fields.length < 5 && (
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              )}
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
      <Title level={3}>Add your Full Stack Projects</Title>
      <Form.List
        name="fullStack"
        rules={[
          {
            validator: async (_, users) => {
              if (!users || users.length < 2) {
                return Promise.reject(new Error("At least 2 Full Stack Projects"));
              } else if (users.length > 5) {
                return Promise.reject(new Error("At most 5 users"));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: "flex",
                  marginBottom: 8,
                  alignItems: "center",
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  boxShadow: "0 0 8px rgba(13, 12, 12, 0.15)",
                }}
                align="baseline"
                size="large"
                wrap
              >
                <Form.Item
                  {...restField}
                  name={[name, "name"]}
                  label="project Name"
                  rules={[
                    {
                      required: true,
                      message: "Project Name is required",
                    },
                  ]}
                >
                  <Input placeholder="Project Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "link"]}
                  label="Project Link"
                  rules={[
                    {
                      required: true,
                      message: "Project Link is required",
                    },
                  ]}
                >
                  <Input placeholder="Project Link" />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              {fields.length < 5 && (
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              )}
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  );
};

export default ProjectForm;
