import { useMutation } from "@tanstack/react-query";
import { request } from "../../../config/request";
import { BrandType } from "../../../types/brand-type";

export const usePostBrands = () => {
  return useMutation({
    mutationFn: (data: FormData) =>
      request
        .post<BrandType>("/brand/", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data),
  });
};
