import { request } from "../../config/request";
import { useQuery } from "@tanstack/react-query";
import { BrandType } from "../../types/brand-type";

export const useGetSubCategories = () => {
  return useQuery({
    queryKey: ["get-sub"],
    queryFn: () =>
      request.get<BrandType>("/api/subcategory/").then((res) => res.data),
  });
};
