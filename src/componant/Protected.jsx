import { useEffect } from "react";
import { useCities } from "../Context/CititesContext";
import { useNavigate } from "react-router-dom";
export default function Protected({ children }) {
  const { isOk } = useCities();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isOk) {
      navigate("/");
    }
  });
  return isOk ? children : null;
}
