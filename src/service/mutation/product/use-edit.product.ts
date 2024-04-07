import { request } from "../../../config/request";
import { useMutation } from "@tanstack/react-query";
import { singleProductType } from "../../../types/single-product-type";

export const useEditProducts = (id: string) => {
  return useMutation({
    mutationFn: (data: FormData) =>
      request
        .patch<singleProductType>(`/product/${id}/`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data),
  });
};
