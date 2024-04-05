import { request } from "../../../config/request";
import { useMutation } from "@tanstack/react-query";
import { ProductType } from "../../../types/product-type";

export const usePatchCategories = (id: string) => {
  return useMutation({
    mutationFn: (data: FormData) =>
      request
        .patch<ProductType>(`/category/${id}/`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data),
  });
};
