import React from "react";
import Template1 from "../templates/Template1";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Result, Space, Spin, message } from "antd";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { api } from "../api";
import Template2 from "../templates/Template2";

const Resume = () => {
  const dispatch = useDispatch();
  const username = useParams().username;
  const queryClient = useQueryClient();

  const getResumeData = async () => {
    return (await api.get("template/" + username)).data;
  };

  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["resumeForClient"],
    queryFn: getResumeData,
    onError: (error) => {
      message.error(error.response.data.message);
    },
    retry: false,
  });
  if (isLoading) {
    return (
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
        size="large"
      >
        <Spin tip="Fetching Resume..." size="large">
          <div className="content" />
        </Spin>
      </Space>
    );
  }
  if (isError) {
    return (
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={
          <Button
            type="primary"
            onClick={() => (window.location.href = "/dashboard")}
          >
            Back Home
          </Button>
        }
      />
    );
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Button
        type="primary"
        onClick={() => queryClient.invalidateQueries("resumeForClient")}
        style={{ marginTop: 20, marginBottom: 20 }}
        loading={isFetching}
      >
        Refresh
      </Button>
      {data.template === "1" && <Template1 {...data} />}
      {data.template === "2" && <Template2 {...data} />}
    </div>
  );
};

export default Resume;
