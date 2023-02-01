import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
const { Title } = Typography;

const CoursesForm = () => {
  return (
    <>
      <Title level={3}>Courses</Title>
      <Form.List name="courses">
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
                  label="Course Name"
                  rules={[
                    {
                      required: true,
                      message: "Course Name is required",
                    },
                  ]}
                  style={{ width: "32%" }}
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
                  style={{ width: "32%" }}
                >
                  <Input placeholder="Certificate link" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "organization"]}
                  label="Organization"
                  style={{ width: "32%" }}
                >
                  <Input placeholder="Organization" />
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

export default CoursesForm;
