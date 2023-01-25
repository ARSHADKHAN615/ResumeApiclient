import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, Typography } from "antd";
const { Title } = Typography;

const CoursesForm = () => {
  return (
    <>
      <Title level={3}>Add your Courses</Title>
      <Form.List
        name="courses"
        // rules={[
        //   {
        //     validator: async (_, education) => {
        //       if (!education || education.length < 2) {
        //         return Promise.reject(new Error("At least 2 courses"));
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
                  label="Course Name"
                  rules={[
                    {
                      required: true,
                      message: "Course Name is required",
                    },
                  ]}
                >
                  <Input placeholder="Course Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "certificate"]}
                  label="Certificate link"
                  rules={[
                    {
                      required: true,
                      message: "Certificate link is required",
                    },
                  ]}
                >
                  <Input placeholder="Certificate link" />
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
};

export default CoursesForm;
