import { useMutation } from "@tanstack/react-query";
import { request } from "../../../config/request";
import { BrandType } from "../../../types/brand-type";

export const usePostBanners = () => {
  return useMutation({
    mutationFn: (data: FormData) =>
      request
        .post<BrandType>("/banner/", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data),
  });
};
