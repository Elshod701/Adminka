import { useMutation } from "@tanstack/react-query";
import { ProductType } from "../../../types/product-type";
import { request } from "../../../config/request";

export const useCreateSub = () => {
  return useMutation({
    mutationFn: (data: FormData) =>
      request
        .post<ProductType>("/category/", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data),
  });
};
