import { Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Space } from "antd";

const ExperienceForm = () => {
  const { RangePicker } = DatePicker;
  return (
    <>
      <Form.List
        name="experience"
        rules={[
          {
            validator: async (_, experience) => {
              if (!experience || experience.length < 2) {
                return Promise.reject(new Error("At least 2 experience"));
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
                  name={[name, "company"]}
                  label="Company Name"
                  rules={[
                    {
                      required: true,
                      message: "Company Name is required",
                    },
                  ]}
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
                >
                  <RangePicker picker="month" />
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
                >
                  <Select placeholder="Status" allowClear style={{ width: 120 }}>
                    <Select.Option value="current">Current</Select.Option>
                    <Select.Option value="past">Past</Select.Option>
                    <Select.Option value="part-time">Part-time</Select.Option>
                  </Select>
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

export default ExperienceForm;
