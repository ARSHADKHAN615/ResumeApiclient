import React from "react";
import {
  UserOutlined,
  SaveOutlined,
  CloseCircleOutlined,
  LinkedinOutlined,
  BookOutlined,
  ToolOutlined,
  ProjectOutlined,
  LineChartOutlined,
  WechatOutlined,
  BulbOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { Button, Form, Space, Tabs, message } from "antd";
import ProfileForm from "../components/ProfileForm";
import SkillsForms from "../components/SkillsForms";
import EducationForm from "../components/EducationForm";
import SocialForm from "../components/SocialForm";
import ProjectForm from "../components/ProjectForm";
import ExperienceForm from "../components/ExperienceForm";
import LanguageForm from "../components/LanguageForm";
import CoursesForm from "../components/CoursesForm";
import StackForm from "../components/StackForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../api";
import { logout } from "../slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient()
  const authUserId = useSelector((state) => state.auth.currentUser?._id);

  const [form] = Form.useForm();

  const getResumeData = async () => {
    return (await api.get("resume/" + authUserId)).data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["resume"],
    queryFn: getResumeData,
    onError: (error) => {
      message.error(error.response.data.message);
      dispatch(logout());
      // navigate("/sign-in");
      window.location.replace("/sign-in");
    },
    retry: false,
  });

  const { mutate: UpdateResume, isLoading: submitBtn } = useMutation({
    mutationFn: async (formData) => {
      return await api.put("resume/" + authUserId, formData);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries("resume");
      message.success("Resume updated successfully");
    },
    onError: (error) => {
      message.error(error.response.data.message || "Something went wrong");
    },
  });

  const onFinish = (values) => {
    UpdateResume(values);
  };
  const onFinishFailed = (errorInfo) => {
    message.error(errorInfo.errorFields[0].errors[0]);
    console.log("Failed:", errorInfo);
  };

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  const { image, experience, education, ...others } = data;

  const newEducation = education.map((edu) => {
    return {
      ...edu,
      duration: [
        dayjs(edu.duration[0], "YYYY-MM-DD"),
        dayjs(edu.duration[1], "YYYY-MM-DD"),
      ],
    };
  });
  const newExperience = experience.map((exp) => {
    return {
      ...exp,
      duration: [
        dayjs(exp.duration[0], "YYYY-MM-DD"),
        dayjs(exp.duration[1], "YYYY-MM-DD"),
      ],
    };
  });

  const initialValues = {
    ...others,
    image: [{ uid: "-1", name: "image.png", status: "done", url: image }],
    education: newEducation,
    experience: newExperience,
  };

  const operations = (
    <Space>
      <Button
        type="primary"
        icon={<SaveOutlined />}
        loading={submitBtn}
        htmlType="submit"
        size="middle"
      >
        Save
      </Button>
      {/* <Button
        type="primary"
        size="middle"
        icon={<CloseCircleOutlined />}
        danger
        htmlType="reset"
        // onClick={() => form.resetFields()}
      >
        Cancel
      </Button> */}
    </Space>
  );
  const Components = [
    {
      key: "1",
      label: (
        <span>
          <UserOutlined />
          Profile
        </span>
      ),
      forceRender: true,
      children: <ProfileForm Preimage={image} />,
    },
    {
      key: "2",
      label: (
        <span>
          <ToolOutlined />
          Skills
        </span>
      ),
      forceRender: true,
      children: <SkillsForms />,
    },
    {
      key: "3",
      label: (
        <span>
          <BookOutlined />
          Education
        </span>
      ),
      forceRender: true,
      children: <EducationForm />,
    },
    {
      key: "4",
      label: (
        <span>
          <LinkedinOutlined />
          Social
        </span>
      ),
      forceRender: true,
      children: <SocialForm />,
    },
    {
      key: "5",
      label: (
        <span>
          <ProjectOutlined />
          Projects
        </span>
      ),
      forceRender: true,
      children: <ProjectForm />,
    },
    {
      key: "6",
      label: (
        <span>
          <LineChartOutlined />
          Experience
        </span>
      ),
      forceRender: true,
      children: <ExperienceForm />,
    },
    {
      key: "7",
      label: (
        <span>
          <BulbOutlined />
          Courses
        </span>
      ),
      forceRender: true,
      children: <CoursesForm />,
    },
    {
      key: "8",
      label: (
        <span>
          <DatabaseOutlined />
          Tech Stack
        </span>
      ),
      forceRender: true,
      children: <StackForm />,
    },
    {
      key: "9",
      label: (
        <span>
          <WechatOutlined />
          Languages
        </span>
      ),
      forceRender: true,
      children: <LanguageForm />,
    },
  ];
  return (
    <Form
      name="basic"
      layout="vertical"
      form={form}
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Tabs
        tabBarExtraContent={operations}
        defaultActiveKey="1"
        items={Components}
      />
    </Form>
  );
};

export default Home;
