import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space, Typography } from "antd";
const { Title } = Typography;

const LanguageForm = () => {
  return (
    <>
      <Title level={3}>Languages</Title>
      <Form.List name="languages">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div
                key={key}
                style={{
                  display: "flex",
                  marginBottom: 8,
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  boxShadow: "0 0 8px rgba(13, 12, 12, 0.15)",
                  position: "relative",
                  backgroundColor: "#fff",
                }}
              >
                <Form.Item
                  {...restField}
                  name={[name, "name"]}
                  label="Language Name"
                  rules={[
                    {
                      required: true,
                      message: "Language Name is required",
                    },
                  ]}
                  style={{ width: "48%" }}
                >
                  <Input placeholder="Language Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "level"]}
                  label="Language Level"
                  rules={[
                    {
                      required: true,
                      message: "Language Level is required",
                    },
                  ]}
                  style={{ width: "48%" }}
                >
                  <Select placeholder="Language Level" style={{ width: "100%" }} allowClear>
                    <Select.Option value="beginner">Beginner</Select.Option>
                    <Select.Option value="intermediate">
                      Intermediate
                    </Select.Option>
                    <Select.Option value="advanced">Advanced</Select.Option>
                  </Select>
                </Form.Item>

                <MinusCircleOutlined
                  onClick={() => remove(name)}
                  style={{
                    position: "absolute",
                    borderLeft: "1px solid #ccc",
                    borderBottom: "1px solid #ccc",
                    padding: "0.5rem",
                    borderBottomLeftRadius: "0.5rem",
                    top: 0,
                    right: 0,
                    cursor: "pointer",
                    color: "#f5222d",
                  }}
                />
              </div>
            ))}
            {fields.length < 4 && (
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
            )}
          </>
        )}
      </Form.List>
    </>
  );
};

export default LanguageForm;
