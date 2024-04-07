import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";
import { singleProductType } from "../../types/single-product-type";

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () =>
      request.get<singleProductType>(`/product/`).then((res) => res.data),
  });
};
