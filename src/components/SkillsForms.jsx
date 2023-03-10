import { Form, Select, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import React from "react";
const { Title } = Typography;
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const SkillsForms = () => {
  const options = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "NodeJs",
    "MongoDB",
    "Laravel",
    "MySql",
    "PHP",
    "Python",
    "Django",
    "C++",
    "C",
    "Java",
    "Android-Studio",
    "Flutter",
    "ExpressJs",
    "Dart",
    "Firebase",
    "AWS",
    "GCP",
    "Git",
    "GitHub",
  ].map((skill) => ({ label: skill, value: skill }));

  return (
    <>
      <Title level={3}>Skills & Tools</Title>
      <div
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
          name="skills"
          label="Skills and Tools"
          rules={[
            { required: true, message: "Skills is required" },
            {
              validator: async (_, education) => {
                if (!education || education.length > 15) {
                  return Promise.reject(
                    new Error("Maximum 15 Skills are allowed")
                  );
                }
              },
            },
          ]}
          tooltip={{
            title:
              "You Select Your Skills and also you can add your own skills",
            icon: <InfoCircleOutlined />,
          }}
          style={{ width: "100%" }}
        >
          <Select
            mode="tags"
            size="middle"
            style={{
              width: "100%",
            }}
            placeholder="Skills"
            options={options}
          />
        </Form.Item>

        <Form.Item
          label="Achievements"
          name="achievements"
          valuePropName="data"
          getValueFromEvent={(event, editor) => {
            const data = editor.getData();
            return data;
          }}
          rules={[
            {
              required: true,
              message: "Achievements is required!",
            },
          ]}
          style={{ width: "100%" }}
        >
          <CKEditor editor={ClassicEditor} />
        </Form.Item>
      </div>
    </>
  );
};

export default SkillsForms;
