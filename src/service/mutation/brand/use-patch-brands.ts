import { request } from "../../../config/request";
import { useMutation } from "@tanstack/react-query";
import { BrandType } from "../../../types/brand-type";

export const usePatchBrands = (id: string) => {
  return useMutation({
    mutationFn: (data: FormData) =>
      request
        .patch<BrandType>(`/brand/${id}/`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data),
  });
};
