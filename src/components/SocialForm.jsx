import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space, Typography } from "antd";
const { Title } = Typography;
const SocialForm = () => {
  const socialOptions = [
    { value: "github", label: "Github" },
    { value: "linkedin", label: "Linkedin" },
    { value: "facebook", label: "Facebook" },
    { value: "twitter", label: "Twitter" },
    { value: "instagram", label: "Instagram" },
    { value: "youtube", label: "Youtube" },
    { value: "website", label: "Website" },
    { value: "leetcode", label: "Leetcode" },
  ]
  return (
    <>
      <Title level={3}>Add your Social Links</Title>
      <Form.List
        name="social"
        rules={[
          {
            validator: async (_, users) => {
              if (!users || users.length < 2) {
                return Promise.reject(new Error("At least 2 social links is required"));
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
                style={{
                  display: "flex",
                  marginBottom: 8,
                  alignItems: "center",
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  boxShadow : "0 0 8px rgba(13, 12, 12, 0.15)"
                }}
                align="baseline"
                size="large"
                wrap
              >
                <Form.Item
                  {...restField}
                  name={[name, "name"]}
                  label="Name"
                  rules={[
                    {
                      required: true,
                      message: "Social Media Name is required",
                    },
                  ]}
                >
                  <Select
                    showSearch
                    placeholder="Select a Name Of Social Media"
                    optionFilterProp="children"
                    allowClear
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={socialOptions}
                  />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "link"]}
                  label="Link"
                  rules={[
                    {
                      required: true,
                      message: "Social Media Link is required",
                    },
                  ]}
                >
                  <Input placeholder="Social Media Link" />
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
export default SocialForm;
