import React, { useState } from "react";
import c from "./style.module.scss";
import { useForm } from "react-hook-form";
import { useGetData } from "../../utils/hooks/getData";
import { usePostData } from "../../utils/hooks/postData";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { useEditData } from "../../utils/hooks/updateData";
import { Table, Space, Modal, Button, Input } from "antd";
import { useQueryClient } from "@tanstack/react-query";
import { useDelateData } from "../../utils/hooks/delateData";
function Category() {
  const [fileList, setFileList] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (data) => {
    setIsModalOpen(false);
    postMainData.mutate(
      {
        name_Uz: data.name_Uz,
        name_Ru: data.name_Ru,
        name_En: data.name_En,
        photoId: photoId,
       
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["category"],
          });
        },
        onError: () => console.log("error"),
      }
    );
    // console.log(data);
    reset();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns = [
    {
      title: "Uzbek",
      dataIndex: "name_Uz",
      key: "name_Uz",
    },
    {
      title: "English",
      dataIndex: "name_En",
      key: "name_En",
    },
    {
      title: "Russion",
      dataIndex: "name_Ru",
      key: "name_Ru",
    },
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photoId",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">        
          <div className={c.edit} onClick={showModal}><i className={'fa-solid fa-pen'}></i></div>
          <div className={c.delate}><i className="fa-solid fa-trash"></i></div>
          <div>
        
            <Modal
              title="Edit"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <form action="">
                <Input
                  type="text"
                  placeholder="name_Uz"
                  {...register("name_Uz", { required: true })}
                />
                {errors.gender && <span>This field is required</span>}
                <Input
                  type="text"
                  placeholder="name_Ru"
                  {...register("name_Ru", { required: true })}
                />

                {errors.gender && <span>This field is required</span>}

                <Input
                  type="text"
                  placeholder="name_En"
                  {...register("name_En", { required: true })}
                />
                {errors.gender && <span>This field is required</span>}

                <ImgCrop rotate>
                  <Upload
                    action="http://3.19.30.204/upload/upload"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                    name={"photo"}
                    // {...register("photo.path", { required: true })}
                  >
                    {fileList?.length < 1 && "+ Upload"}
                  </Upload>
                </ImgCrop>
                {errors.gender && <span>This field is required</span>}
              </form>
            </Modal>
          </div>
        </Space>
      ),
    },
  ];
  const [photoId, setPhotoId] = useState("");
  // rasm file
  const onChange = ({ fileList: newFileList, file }) => {
    setFileList(newFileList);
    setPhotoId(file?.response?.id);
    reset();
  };
  const queryClient = useQueryClient();
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
//////////////////////use api/////////////////////
  const category = useGetData(["category"], "/category");
  // console.log(category);
  const postMainData = usePostData("/category");

  const delateMainData = useDelateData("/category");

  const editCategory = useEditData("/category/4");
///////////////////////use api end//////////////////
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const editCat = (data, id) => {
    for (let i in data.id) {
      if (data.id == i.id) {
        console.log(i.id);
        editCategory.mutate(
          {
            name_Uz: data.name_Uz,
            name_Ru: data.name_Ru,
            name_En: data.name_En,
            photoId: photoId,
          },
          { onSuccess: (data) => console.log(data, "data") }
        );
      }
    }
  };

  // const onSub = (data) => {
  //   postMainData.mutate(
  //     {
  //       name_Uz: data.name_Uz,
  //       name_Ru: data.name_Ru,
  //       name_En: data.name_En,
  //       photoId: photoId,
       
  //     },
  //     {
  //       onSuccess: () => {
  //         queryClient.invalidateQueries({
  //           queryKey: ["category"],
  //         });
  //       },
  //       onError: () => console.log("error"),
  //     }
  //   );
  //   console.log(data);
  //   reset();
  // };

  return (
    <div className={c.category}>
      
      <h1>Category</h1>

      {/* <form onSubmit={handleSubmit(onSub)}>
        <Input
          type="text"
          placeholder="name_Uz"
          {...register("name_Uz", { required: true })}
        />
        {errors.gender && <span>This field is required</span>}
        <Input
          type="text"
          placeholder="name_Ru"
          {...register("name_Ru", { required: true })}
        />

        {errors.gender && <span>This field is required</span>}

        <Input
          type="text"
          placeholder="name_En"
          {...register("name_En", { required: true })}
        />
        {errors.gender && <span>This field is required</span>}

        <ImgCrop rotate>
          <Upload
            action="http://3.19.30.204/upload/upload"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
            name={"photo"}
          >
            {fileList?.length < 1 && "+ Upload"}
          </Upload>
        </ImgCrop>
        {errors.gender && <span>This field is required</span>}

        <Button  type="submit">Submit</Button >
      </form> */}
      
      <Button className={c.creatcat} type="primary" onClick={showModal}>
        Category qo'shish
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <form
      //  onSubmit={handleSubmit(onSub)}
       >
        <Input
          type="text"
          placeholder="name_Uz"
          {...register("name_Uz", { required: true })}
        />
        {errors.gender && <span>This field is required</span>}
        <Input
          type="text"
          placeholder="name_Ru"
          {...register("name_Ru", { required: true })}
        />

        {errors.gender && <span>This field is required</span>}

        <Input
          type="text"
          placeholder="name_En"
          {...register("name_En", { required: true })}
        />
        {errors.gender && <span>This field is required</span>}

        <ImgCrop rotate>
          <Upload
            action="http://3.19.30.204/upload/upload"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
            name={"photo"}
          >
            {fileList?.length < 1 && "+ Upload"}
          </Upload>
        </ImgCrop>
        {errors.gender && <span>This field is required</span>}

        {/* <Button  type="submit">Submit</Button > */}
      </form>
      </Modal>

      <div>
        <Table
          columns={columns}
          scroll={{ y: 600 }}
          dataSource={category?.data?.data?.map((item, index) => ({
            name_Uz: item.name_Uz,
            name_Ru: item.name_Ru,
            name_En: item.name_En,
            photo: (
              <img
                style={{
                  width: "50px",
                  height: "50px",
                }}
                src={`http://3.19.30.204/upload/${item?.photo?.path}`}
              />
            ),
          }))}
        />
      </div>
    </div>
  );
}

export default Category;
