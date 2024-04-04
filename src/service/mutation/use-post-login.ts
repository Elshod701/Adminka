import { useMutation } from "@tanstack/react-query";
import { request } from "../../config/request";
import { LoginType } from "../../types/login-type";

export const usePostLogin = () => {
  return useMutation({
    mutationFn: (data: LoginType) =>
      request.post("/api/admin-login/", data).then((res) => res.data),
  });
};
