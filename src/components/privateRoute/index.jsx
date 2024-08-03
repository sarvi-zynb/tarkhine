import { Navigate } from "react-router-dom";
import { useAuthContext } from "./../../contexts/Authentication";
const PrivateRoute = ({ children }) => {
  const { token } = useAuthContext();
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
