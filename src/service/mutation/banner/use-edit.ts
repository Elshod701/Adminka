import { request } from "../../../config/request";
import { useMutation } from "@tanstack/react-query";
import { BannerType } from "../../../types/banner-type";

export const useEditBanner = (id: string) => {
  return useMutation({
    mutationFn: (data: FormData) =>
      request
        .patch<BannerType>(`/banner/${id}/`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data),
  });
};
