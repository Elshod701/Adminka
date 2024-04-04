import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";
import { CategoryType } from "../../types/category-type";

export interface DataType {
  key: number;
  title: string;
  id: number;
  image: string;
  results: CategoryType[];
}
export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => request.get(`/category/`).then((res) => res.data),
  });
};
