import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const { Title } = Typography;
const ProjectForm = () => {
  return (
    <>
      <Title level={3}>Projects</Title>
      <Form.List name="frontEnd">
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
                  label="project Name"
                  rules={[
                    {
                      required: true,
                      message: "Project Name is required",
                    },
                  ]}
                  style={{ width: "32%" }}
                >
                  <Input placeholder="Project Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "liveLink"]}
                  label="Live Link"
                  rules={[
                    {
                      pattern: /^(ftp|http|https):\/\/[^ "]+$/,
                      message: "Please Enter a valid URL!",
                    },
                  ]}
                  style={{ width: "32%" }}
                >
                  <Input placeholder="Live Link" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "githubLink"]}
                  label="Github Link"
                  rules={[
                    {
                      pattern: /^(ftp|http|https):\/\/[^ "]+$/,
                      message: "Please Enter a valid URL!",
                    },
                  ]}
                  style={{ width: "32%" }}
                >
                  <Input placeholder="Github Link" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "description"]}
                  label="Description"
                  valuePropName="data"
                  getValueFromEvent={(event, editor) => {
                    const data = editor.getData();
                    return data;
                  }}
                  style={{ width: "100%" }}
                >
                  <CKEditor editor={ClassicEditor} />
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
      {/* <Title level={3}>Full Stack Projects</Title>
      <Form.List name="fullStack">
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
                  label="project Name"
                  rules={[
                    {
                      required: true,
                      message: "Project Name is required",
                    },
                  ]}
                  style={{ width: "32%" }}
                >
                  <Input placeholder="Project Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "liveLink"]}
                  label="Live Link"
                  rules={[
                    {
                      pattern: /^(ftp|http|https):\/\/[^ "]+$/,
                      message: "Please Enter a valid URL!",
                    },
                  ]}
                  style={{ width: "32%" }}
                >
                  <Input placeholder="Live Link" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "githubLink"]}
                  label="Github Link"
                  rules={[
                    {
                      pattern: /^(ftp|http|https):\/\/[^ "]+$/,
                      message: "Please Enter a valid URL!",
                    },
                  ]}
                  style={{ width: "32%" }}
                >
                  <Input placeholder="Github Link" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "description"]}
                  label="Description"
                  valuePropName="data"
                  getValueFromEvent={(event, editor) => {
                    const data = editor.getData();
                    return data;
                  }}
                  style={{ width: "100%" }}
                >
                  <CKEditor editor={ClassicEditor} />
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
            {fields.length < 5 && (
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
      </Form.List> */}
    </>
  );
};

export default ProjectForm;
