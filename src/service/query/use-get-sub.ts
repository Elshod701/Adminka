import { request } from "../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetSubCategories = () => {
  return useQuery({
    queryKey: ["get-sub"],
    queryFn: () => request.get("/api/subcategory/").then((res) => res.data),
  });
};
