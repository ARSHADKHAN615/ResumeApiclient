import { Button, Input, Space, Tooltip, Typography, message } from "antd";
import { CopyOutlined,CheckOutlined } from "@ant-design/icons";
const { Title } = Typography;
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../api";
import { loginSuccess } from "../slices/AuthSlice";
import copy from "copy-to-clipboard";

const GetApi = () => {
  const dispatch = useDispatch();
  const [isCopied, setIsCopied] = React.useState(false);
  const authUserId = useSelector((state) => state.auth.currentUser?._id);
  const authUserName = useSelector((state) => state.auth.currentUser?.name);
  const isPublic = useSelector((state) => state.auth.currentUser?.isPublic);
  const { mutate: generateApi, isLoading: submitBtn } = useMutation({
    mutationFn: async () => {
      return await api.put("user/make-public/" + authUserId);
    },
    onSuccess: (data) => {
      message.success("API generated successfully");
      dispatch(loginSuccess(data.data.other));
    },
    onError: (error) => {
      message.error(error.response.data.message || "Something went wrong");
    },
  });
  const apiLink = import.meta.env.VITE_API_URL + authUserName;
  return (
    <>
      <Title level={3}>Get your API</Title>
      {!isPublic ? (
        <Button type="primary" onClick={generateApi} loading={submitBtn}>
          Generate API
        </Button>
      ) : null}
      {isPublic && (
        <Space.Compact block>
          <Input
            style={{
              width: "calc(100% - 200px)",
            }}
            disabled
            defaultValue={apiLink}
          />
          <Tooltip title="Copy URL">
            <Button icon={isCopied ? <CheckOutlined /> : <CopyOutlined />} onClick={() => { copy(apiLink); setIsCopied(true); }} style={{color: isCopied ? "green" : "black"}} />
          </Tooltip>
        </Space.Compact>
      )}
    </>
  );
};

export default GetApi;
