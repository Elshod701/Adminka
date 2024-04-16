import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";
import { CategoryType } from "../../types/category-type";

export const useGetCategories = (id: string = "id", page: number = 1) => {
  return useQuery({
    queryKey: ["categories", id, page],
    queryFn: () =>
      request
        .get<CategoryType>(`/category/?ordering=${id}`, {
          params: { offset: page, limit: 5 },
        })
        .then((res) => {
          return {
            data: res.data,
            pageSize: Math.ceil(res.data.count),
          };
        }),
  });
};
