import { request } from "../../config/request";
import { useQuery } from "@tanstack/react-query";
import { BannerType } from "../../types/banner-type";

export const useGerSingleBanner = (id: string) => {
  return useQuery({
    queryKey: ["get-single", id],
    queryFn: () =>
      request.get<BannerType>(`/banner/${id}/`).then((res) => res.data),
  });
};
