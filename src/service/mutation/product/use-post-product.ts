import { useMutation } from "@tanstack/react-query";
import { request } from "../../../config/request";
import { singleProductType } from "../../../types/single-product-type";

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: (data: FormData) =>
      request
        .post<singleProductType>("/product/", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data),
  });
};
