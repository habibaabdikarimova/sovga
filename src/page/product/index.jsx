import React, {  useState } from "react";
import c from "./style.module.scss";
import { useForm } from "react-hook-form";
import { useGetData } from "../../utils/hooks/getData";
import { usePostData } from "../../utils/hooks/postData";
import { FaTimes } from "react-icons/fa";
function Product() {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur" });

  const products = useGetData(["products"], "/products");
  console.log(products);
  const postMainData = usePostData("/products");

  const onSub = (data) => {
    setShow(true);
    postMainData.mutate({
      id: "230de2ea-7661-4b94-998d-8f1f55bbafdc",
      gender: data?.gender,
      color: data?.color,
      active: data?.active,
      price: data?.price,
      size: "ew",
      type: "wqe",
      name_Uz: "wer",
      name_Ru: "qweqwe",
      name_En: "eweqrqwe",
      description_Uz: "eqweqwe",
      description_Ru: "eqewer",
      description_En: "wreqwrq",
      photoId: null,
      categoryId: "b6d5af85-bc8b-454d-980c-0865a8d14dfb",
      discount: 132,
      Category: {
        id: "b6d5af85-bc8b-454d-980c-0865a8d14dfb",
        name_Uz: "Team 1",
        name_Ru: "Team 1",
        name_En: "Team 1",
        photoId: "d56be775-280e-4ed2-9417-c962cfc35a92",
      },
    });
    reset();
  };

  function openModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }

  return (
    <div className={c.Product}>
      <h1>Product</h1>
      <div
        onClick={() => closeModal()}
        className={show ? c.hidden_mode : c.none_form}
      ></div>
      <form
        className={show ? c.main_form_container : c.none_form}
        onSubmit={handleSubmit(onSub)}
      >
        <div className={c.close_bar} onClick={() => closeModal()}>
          <FaTimes />
        </div>

        <input
          type="text"
          placeholder="gender"
          {...register("gender", { required: true })}
        />
        {errors.gender && <span>This field is required</span>}
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
        <input
          type="text"
          placeholder="price"
          {...register("price", { required: true })}
        />
        <button type="submit">Submit</button>
      </form>

      <button onClick={() => openModal()}>qo'shish</button>

      <div>
        <h1>All Products</h1>
        {products?.isLoading ? (
          <section>
            <h3>Loaading...</h3>
          </section>
        ) : (
          products?.data?.data?.map((element, value) => {
            return (
              <div key={value}>
                <h3>Gender{element?.gender}</h3>
                <h3>Price : {element?.price}</h3>
                <h5>Color{element?.color}</h5>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Product;
