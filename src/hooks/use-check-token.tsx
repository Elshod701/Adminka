import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const UseCheckToken = () => {
  const navigate = useNavigate();
  const token = Cookies.get("user");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);
  return <></>;
};

export default UseCheckToken;
