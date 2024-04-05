import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";
import { CategoryType } from "../../types/category-type";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      request.get<CategoryType>(`/category/`).then((res) => res.data),
  });
};
