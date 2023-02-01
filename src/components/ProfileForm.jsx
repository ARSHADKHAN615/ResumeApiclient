import React, { useState } from "react";
import { Form, Input, message, Upload } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { FirebaseApp } from "../firebaseConfig";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const ProfileForm = ({ Preimage }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(Preimage);
  const [previousImage, setPreviousImage] = useState(Preimage);
  const [messageApi, contextHolder] = message.useMessage();

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  // custom upload with firebase storage
  const customUpload = (options) => {
    messageApi.open({
      key: 'uploading',
      type: 'loading',
      content: 'Uploading...',
    });
    const { onSuccess, onError, file, onProgress } = options;
    const storage = getStorage(FirebaseApp);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgress({ percent: progress });
      } /* progress */,
      (error) => {
        onError(error);
      },
      /* error */ () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          if (previousImage !== undefined && previousImage !== downloadURL) {
            const desertRef = ref(storage, previousImage);
            deleteObject(desertRef)
              .then(() => {
                console.log("deleted");
              })
              .catch((error) => {

                console.log(error);
              });            
          }
          setPreviousImage(downloadURL);
          onSuccess(null, downloadURL);
          messageApi.success({  key: 'uploading', content: 'Uploaded!', duration: 2 });
        });
      }
    );
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const getFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <>
      {contextHolder}
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
        name="image"
        getValueFromEvent={getFile}
        valuePropName="fileList"
        label="Profile Image"
        rules={[{ required: true, message: "Please select an image!" }]}
        style={{ width: "100%",display:"flex",justifyContent:"center" }}
      >
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleChange}
            customRequest={customUpload}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="avatar"
              style={{
                width: "100%",
              }}
            />
          ) : (
            uploadButton
          )}
        </Upload>
      </Form.Item>
  
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Name is required!",
            },
          ]}
          style={{ width: "32%" }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "Please Enter a valid E-mail!",
            },
            {
              required: true,
              message: "Please Enter your E-mail!",
            },
          ]}
          style={{ width: "32%" }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: "Phone is required!" },
            {
              pattern: /^[0-9]+$/,
              message: "Please Enter a valid Phone Number!",
            },
          ]}
          style={{ width: "32%" }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Address is required!" }]}
          style={{ width: "32%" }}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Website" name="website" style={{ width: "32%" }}>
          <Input />
        </Form.Item>
        <Form.Item
          label="designation"
          name="designation"
          rules={[{ required: true, message: "Designation is required!" }]}
          style={{ width: "32%" }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Bio"
          name="bio"
          valuePropName="data"
          getValueFromEvent={(event, editor) => {
            const data = editor.getData();
            return data;
          }}
          rules={[
            {
              required: true,
              message: "Bio is required!",
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

export default ProfileForm;
