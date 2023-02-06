import React from "react";
import Template1 from "../templates/Template1";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Result, Space, Spin, message } from "antd";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { api } from "../api";

const Resume = () => {
  const dispatch = useDispatch();
  const username = useParams().username;
  const queryClient = useQueryClient();

  const getResumeData = async () => {
    return (await api.get("template/"+username)).data;
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
        extra={<Button type="primary" onClick={() => window.location.href = "/dashboard"}>Back Home</Button>}
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
      <style
        dangerouslySetInnerHTML={{
          __html: `@import url('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css')`,
        }}
      />
      {(data.template === "1") && <Template1 {...data} />  }
    </div>
  );
};

export default Resume;
