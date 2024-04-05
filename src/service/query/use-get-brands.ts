import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";
import { BrandType } from "../../types/brand-type";

export const useGetBrands = () => {
  return useQuery({
    queryKey: ["brands"],
    queryFn: () => request.get<BrandType>(`/brand/`).then((res) => res.data),
  });
};
