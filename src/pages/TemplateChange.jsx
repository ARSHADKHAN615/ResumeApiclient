import { useMutation } from "@tanstack/react-query";
import { Button, Form, Radio, Typography, message } from "antd";
import React from "react";
import { api } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../slices/AuthSlice";
const { Title } = Typography;

const TemplateChange = () => {
  const dispatch = useDispatch();
  const authUserId = useSelector((state) => state.auth.currentUser?._id);
  const authUserTemplate = useSelector( (state) => state.auth.currentUser?.template);
  const { mutate: generateApi, isLoading: submitBtn } = useMutation({
    mutationFn: async (value) => {
      return await api.put("user/change-template/" + authUserId, value);
    },
    onSuccess: (data) => {
      message.success(data.data.message);
      dispatch(loginSuccess(data.data.other));
    },
    onError: (error) => {
      message.error(error.response.data.message || "Something went wrong");
    },
  });
  const onFinish = (values) => {
    // console.log("Success:", values);
    generateApi(values);
  };
  const onFinishFailed = (errorInfo) => {
    message.error(errorInfo.errorFields[0].errors[0]);
    // console.log("Failed:", errorInfo);
  };
  const initialValues = { template: authUserTemplate };
  return (
    <div
      style={{
        marginBottom: 8,
        width: "100%",
        padding: "1rem",
        borderRadius: "0.5rem",
        boxShadow: "0 0 8px rgba(13, 12, 12, 0.15)",
        position: "relative",
        backgroundColor: "#fff",
      }}
    >
      <Title level={3}>Select Template</Title>
      <Form
        name="basic"
        layout="vertical"
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item name="template">
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="1">Template 1</Radio.Button>
            <Radio.Button value="2" disabled>Template 2</Radio.Button>
            <Radio.Button value="3" disabled>Template 3</Radio.Button>
            <Radio.Button value="4" disabled>Template 4</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={submitBtn}>
          Select Template
        </Button>
      </Form>
    </div>
  );
};

export default TemplateChange;
