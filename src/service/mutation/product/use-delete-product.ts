import { request } from "../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useDeleteProduct = () => {
  return useMutation({
    mutationKey: ["delete"],
    mutationFn: (id: number) =>
      request.delete(`/product/${id}/`).then((res) => res.data),
  });
};
