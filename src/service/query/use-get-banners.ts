import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";
import { BannerType } from "../../types/banner-type";

export const useGetBanners = () => {
  return useQuery({
    queryKey: ["get-banners"],
    queryFn: () => request.get<BannerType>(`/banner/`).then((res) => res.data),
  });
};
