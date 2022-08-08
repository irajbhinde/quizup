import { Navigate } from "react-router-dom";
import { useAuth } from "../components";


export default function RequiresAuth({ children }) {
  const { auth } = useAuth();
  const { authStatus } = auth;
  return authStatus ? (
    children
  ) : (
    <Navigate to="/login" />
  );
}
