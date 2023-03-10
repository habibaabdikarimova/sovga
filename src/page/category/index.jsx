import React, { useState } from "react";
// import c from "./style.module.scss";
import { useForm } from "react-hook-form";
import { useGetData } from "../../utils/hooks/getData";
import { usePostData } from "../../utils/hooks/postData";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";

function Category() {
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList, file }) => {
    setFileList(newFileList);
    console.log(file);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const category = useGetData(["category"], "/category");
  console.log(category);
  const postMainData = usePostData("/category");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSub = (data) => {
    postMainData.mutate(
      {
        name_Uz: "Team 1",
        name_Ru: "Team 1",
        name_En: "Team 1",
        photoId: "d56be775-280e-4ed2-9417-c962cfc35a92",
      },
      {
        onSuccess: () => console.log("success"),
      }
    );
    console.log(data);
    // reset();
  };

  return (
    <div>
      Category
      <form
        // className={show ? c.main_form_container : c.none_form}
        onSubmit={handleSubmit(onSub)}
      >
        {/* <div className={c.close_bar} onClick={() => closeModal()}></div> */}
        <input
          type="text"
          placeholder="gender"
          {...register("gender", { required: true })}
        />
        // {errors.gender && <span>This field is required</span>}
        <input
          type="text"
          placeholder="color"
          {...register("color", { required: true })}
        />
        <input
          type="text"
          placeholder="active"
          {...register("active", { required: true })}
        />
        <ImgCrop rotate>
          <Upload
            action="http://3.19.30.204/upload/upload"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 5 && "+ Upload"}
          </Upload>
        </ImgCrop>
        <button type="submit">Submit</button>
      </form>
      {/* <button onClick={() => openModal()}>qo'shish</button> */}
    </div>
  );
}

export default Category;
