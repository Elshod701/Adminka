import { request } from "../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useEditBanner = () => {
  return useMutation({
    mutationKey: ["edit"],
    mutationFn: (id: number) =>
      request.delete(`/banner/${id}/`).then((res) => res.data),
  });
};
