import React, { useState } from "react";
import c from "./style.module.scss";
import { useForm } from "react-hook-form";
import { useGetData } from "../../utils/hooks/getData";
import { usePostData } from "../../utils/hooks/postData";
import { FaTimes } from "react-icons/fa";
import { Select, Space, Input, Button, Table, Modal } from "antd";

function Product() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur" });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    // {
    //   title: "Category",
    //   dataIndex: "category",
    //   key: "category",
    // },
    // {
    //   title: "Active",
    //   dataIndex: "active",
    //   key: "active",
    // },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Name en",
      dataIndex: "name_En",
      key: "name_En",
    },
    {
      title: "Name Ru",
      dataIndex: "name_Ru",
      key: "name_Ru",
    },
    {
      title: "Name Uz",
      dataIndex: "name_Uz",
      key: "name_Uz",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Action",
      key: "action",
      render: () => <div>
         <div className={c.edit} onClick={showModal}><i className={'fa-solid fa-pen'}></i></div>
          <div className={c.delate}><i class="fa-solid fa-trash"></i></div>
      </div>,
    },
  ];

  const products = useGetData(["products"], "/products");
  console.log(products, "products");

  const postMainData = usePostData("/products");

  const onSub = (data) => {
    // console.log(data);
    setShow(true);
    postMainData.mutate(
      {
        gender: data?.gender,
        color: data?.color,
        active: data?.active,
        price: data?.price,
        size: data.size,
        type: data.type,
        name_Uz: data.name_Uz,
        name_Ru: data.name_Ru,
        name_En: data.name_En,
        description_Uz: data.description_Uz,
        description_Ru: data.description_Ru,
        description_En: data.description_En,
        photoId: data.photoId,
        categoryId: data.categoryId,
        discount: data.discount,
        // Category: {
        //   id: "b6d5af85-bc8b-454d-980c-0865a8d14dfb",
        //   name_Uz: "Team 1",
        //   name_Ru: "Team 1",
        //   name_En: "Team 1",
        //   photoId: "d56be775-280e-4ed2-9417-c962cfc35a92",
        // },
      },

      {
        onSuccess: () => console.log("success"),
      }
    );
    reset();
    console.log(data, "mkjuy");
  };

  return (
    <div className={c.Product}>
      <h1>All Products</h1>

      <div>
        <div>
          <Button className={c.creatbtn} type="primary" onClick={showModal}>
            Product qo'shish
          </Button>
          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <form onSubmit={handleSubmit(onSub)}>
              <Input
                className={c.proIn}
                type="text"
                placeholder="size"
                {...register("size", { required: true })}
              />

              <Input
                className={c.proIn}
                type="text"
                placeholder="name_Uz"
                {...register("name_Uz", { required: true })}
              />
              <Input
                className={c.proIn}
                type="text"
                placeholder="name_En"
                {...register("name_En", { required: true })}
              />
              <Input
                className={c.proIn}
                type="text"
                placeholder="name_Ru"
                {...register("name_Ru", { required: true })}
              />

              <Input
                className={c.proIn}
                type="text"
                placeholder="description_Uz"
                {...register("description_Uz", { required: true })}
              />

              <Input
                className={c.proIn}
                type="text"
                placeholder="description_Ru"
                {...register("description_Ru", { required: true })}
              />

              <Input
                className={c.proIn}
                type="text"
                placeholder="description_En"
                {...register("description_En", { required: true })}
              />
              <Input
                className={c.proIn}
                type="text"
                placeholder="photoId"
                {...register("photoId", { required: true })}
              />

              <Input
                className={c.proIn}
                type="text"
                placeholder="categoryId"
                {...register("categoryId", { required: true })}
              />

              <Input
                className={c.proIn}
                type="text"
                placeholder="discount"
                {...register("discount", { required: true })}
              />

              <Space wrap>
                <Select
                  className={c.sellect}
                  defaultValue="BOTH"
                  style={{
                    width: 250,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "BOTH",
                      label: "BOTH",
                    },
                    {
                      value: "MALE",
                      label: "MALE",
                    },
                    {
                      value: "FEMALE",
                      label: "FEMALE",
                    },
                    { ...register("gender", { required: true }) },
                  ]}
                />
              </Space>

              {errors.gender && <span>This field is required</span>}

              <Input
                className={c.proIn}
                type="color"
                placeholder="color"
                {...register("color", { required: true })}
              />
              {errors.gender && <span>This field is required</span>}
              <Input
                className={c.proIn}
                type="boolean"
                placeholder="active"
                {...register("active", { required: true })}
              />

              <Input
                className={c.proIn}
                type="number"
                placeholder="price"
                {...register("price", { required: true })}
              />
              {errors.price && <span>This field is required</span>}
            </form>
          </Modal>
        </div>
        <Table
          className={c.table}
          dataSource={products?.data?.data}
          columns={columns}
        />
        ;
      </div>
    </div>
  );
}

export default Product;
