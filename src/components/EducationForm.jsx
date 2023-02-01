import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Space, Typography } from "antd";
const { Title } = Typography;
const EducationForm = () => {
  const { RangePicker } = DatePicker;
  return (
    <>
      <Title level={3}>Education</Title>
      <Form.List
        name="education"
        rules={[
          {
            validator: async (_, education) => {
              if (!education || education.length < 2) {
                return Promise.reject(
                  new Error("At least 2 Education is required")
                );
              }
            },
          },
        ]}
      >
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
                  name={[name, "degree"]}
                  label="Degree or Certification Name"
                  rules={[
                    {
                      required: true,
                      message: "Degree or Certification is required",
                    },
                  ]}
                  style={{ width: "48%" }}
                >
                  <Input placeholder="Degree or Certification" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "institution"]}
                  label=" Institution or university"
                  rules={[
                    {
                      required: true,
                      message: "Institution or university is required",
                    },
                  ]}
                  style={{ width: "48%" }}
                >
                  <Input placeholder="Institution or university" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "marks"]}
                  label="Marks or Grade"
                  rules={[
                    {
                      required: true,
                      message: "Marks or Grade is required",
                    },
                  ]}
                  style={{ width: "48%" }}
                >
                  <Input placeholder="Marks or Grade" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "duration"]}
                  label="Duration"
                  rules={[
                    {
                      required: true,
                      message: "Duration is required",
                    },
                  ]}
                  style={{ width: "48%" }}
                >
                  <RangePicker picker="month" style={{ width: "100%" }} />
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

export default EducationForm;
