import React from "react";
import { instance } from "../axios";
import { useMutation } from "@tanstack/react-query";
export const useEditData = (url) => {
  return useMutation((data) => {
    instance.patch(url, data).then((data) => {
      console.log(data);
    });
  });
};