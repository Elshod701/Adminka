import { request } from "../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useDeleteCategories = () => {
  return useMutation({
    mutationKey: ["delete"],
    mutationFn: (id: number) =>
      request.delete(`/category/${id}/`).then((res) => res.data),
  });
};
