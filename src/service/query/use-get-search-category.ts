import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

interface ForSearch {
  results?: {
    title: string;
    id?: number;
    image?: string;
  }[];
}

export const useGetSearchCategories = (search: string) => {
  return useQuery({
    queryKey: ["categories", search],
    queryFn: () =>
      request
        .get<ForSearch>(`/category/`, { params: { search } })
        .then((res) => res.data),
  });
};
