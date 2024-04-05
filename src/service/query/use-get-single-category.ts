import { request } from "../../config/request";
import { useQuery } from "@tanstack/react-query";
import { ProductType } from "../../types/product-type";

export const useGetSingleCatProduct = (id: string) => {
  return useQuery({
    queryKey: ["edit-single", id],
    queryFn: () =>
      request.get<ProductType>(`/category/${id}/`).then((res) => res.data),
  });
};
