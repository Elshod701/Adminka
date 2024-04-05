import { request } from "../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useDeleteBrands = () => {
  return useMutation({
    mutationKey: ["delete"],
    mutationFn: (id: number) =>
      request.delete(`/brand/${id}/`).then((res) => res.data),
  });
};
