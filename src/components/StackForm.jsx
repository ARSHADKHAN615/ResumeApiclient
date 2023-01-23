import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, Typography } from "antd";
const { Title } = Typography;

const StackForm = () => {
  return (
    <>
      <Title level={3}>Add your Tech Stack</Title>
      <Form.List
        name="techStack"
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                size="middle"
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
                wrap
              >
                <Form.Item
                  {...restField}
                  name={[name, "name"]}
                  label="Tech Stack Name"
                  rules={[
                    {
                      required: true,
                      message: "Tech Stack Name is required",
                    },
                  ]}
                >
                  <Input placeholder="Tech Stack Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "reference"]}
                  label="Reference link"
                  rules={[
                    {
                      required: true,
                      message: "Reference link is required",
                    },
                  ]}
                >
                  <Input placeholder="Reference link" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  );
}

export default StackForm