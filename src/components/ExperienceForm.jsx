import { Select, Typography } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const { Title } = Typography;
const ExperienceForm = () => {
  const { RangePicker } = DatePicker;
  return (
    <>
      <Title level={3}>Experience</Title>
      <Form.List name="experience">
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
                  name={[name, "company"]}
                  label="Company Name"
                  rules={[
                    {
                      required: true,
                      message: "Company Name is required",
                    },
                  ]}
                  style={{ width: "48%" }}
                >
                  <Input placeholder="Company Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "position"]}
                  label="Position"
                  rules={[
                    {
                      required: true,
                      message: "Position is required",
                    },
                  ]}
                  style={{ width: "48%" }}
                >
                  <Input placeholder="Position" />
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
                <Form.Item
                  {...restField}
                  name={[name, "status"]}
                  label="Status"
                  rules={[
                    {
                      required: true,
                      message: "Status is required",
                    },
                  ]}
                  style={{ width: "48%" }}
                >
                  <Select
                    placeholder="Status"
                    allowClear
                    style={{ width: "100%" }}
                  >
                    <Select.Option value="present">Present</Select.Option>
                    <Select.Option value="past">Past</Select.Option>
                    <Select.Option value="part-time">Part-time</Select.Option>
                  </Select>
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

export default ExperienceForm;
