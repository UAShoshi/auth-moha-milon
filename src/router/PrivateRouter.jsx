import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (user) {
    return children;
  }
  if (loading) {
    return <div className="flex justify-center items-center">
      <span className="loading loading-dots loading-lg"></span>
    </div>
  }
  return <Navigate to="/login"></Navigate>
};

export default PrivateRouter;

PrivateRouter.propTypes ={
  children: PropTypes.node,
}