import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space, Typography } from "antd";
const { Title } = Typography;

const LanguageForm = () => {
  return (
    <>
      <Title level={3}>Add your Languages</Title>
      <Form.List
        name="languages"
        // rules={[
        //   {
        //     validator: async (_, users) => {
        //       if (!users || users.length < 2) {
        //         return Promise.reject(new Error("At least 2 languages"));
        //       } else if (users.length > 4) {
        //         return Promise.reject(new Error("At most 4 languages"));
        //       }
        //     },
        //   },
        // ]}
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
                  label="Language Name"
                  rules={[
                    {
                      required: true,
                      message: "Language Name is required",
                    },
                  ]}
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
                >
                  <Select placeholder="Language Level">
                    <Select.Option value="beginner">Beginner</Select.Option>
                    <Select.Option value="intermediate">
                      Intermediate
                    </Select.Option>
                    <Select.Option value="advanced">Advanced</Select.Option>
                  </Select>
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              {fields.length < 4 && (
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

export default LanguageForm;
