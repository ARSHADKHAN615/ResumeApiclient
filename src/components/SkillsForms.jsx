import { Form, Select } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import React from "react";
const SkillsForms = () => {
  const options = ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB"].map((skill) => ({ label: skill, value: skill }));
  
  return (
    <Form.Item
      name="skills"
      label="Skills and Tools"
      rules={[{ required: true, message: "Skills is required" }]}
      tooltip ={{
        title: 'You Select Your Skills and also you can add your own skills',
        icon: <InfoCircleOutlined />,
      }}
    >
    <Select
      mode="tags"
      style={{
        width: "100%",
      }}
      placeholder="Skills"
      options={options}
      />
    </Form.Item>
  );
};

export default SkillsForms;
