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
const { TextArea } = Input;

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



const ProfileForm = ({Preimage}) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(Preimage);

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
    const { onSuccess, onError, file, onProgress } = options;
    const storage = getStorage(FirebaseApp);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgress({ percent: progress });
      } /* progress */,
      (error) => {
        onError(error);
      }
      /* error */,
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const desertRef = ref(storage, Preimage);
          deleteObject(desertRef).then(() => {
            console.log("deleted");
          }).catch((error) => {
            console.log(error);
          });
          onSuccess(null, downloadURL);
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
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <>
      <Form.Item
        name="image"
        getValueFromEvent={getFile}
        valuePropName="fileList"
        label="Image"
        // rules={[{ required: true, message: "Please select an image!" }]}
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
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="designation"
        name="designation"
        rules={[{ required: true, message: "Designation is required!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Bio"
        name="bio"
        rules={[
          {
            required: true,
            message: "Bio is required!",
          },
        ]}
      >
        <TextArea showCount maxLength={200} />
      </Form.Item>
    </>
  );
};

export default ProfileForm;
