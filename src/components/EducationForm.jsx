import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Space, Typography } from "antd";
const { Title } = Typography;
const EducationForm = () => {
  const { RangePicker } = DatePicker;
  return (
    <>
      <Title level={3}>Add your Education</Title>
      <Form.List
        name="education"
        rules={[
          {
            validator: async (_, education) => {
              if (!education || education.length < 2) {
                return Promise.reject(new Error("At least 2 Education is required"));
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
                  name={[name, "degree"]}
                  label="Degree or Certification Name"
                  rules={[
                    {
                      required: true,
                      message: "Degree or Certification is required",
                    },
                  ]}
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
                >
                  <RangePicker picker="month" />
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

export default EducationForm;
