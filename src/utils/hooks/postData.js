import React from "react";
import { instance } from "../axios";
import { useMutation } from "@tanstack/react-query";
export const usePostData = (url) => {
  return useMutation((data) => {
    instance.post(url, data).then((data) => {
      console.log(data);
    });
  });
};
