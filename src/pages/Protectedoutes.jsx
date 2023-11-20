import { Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
  return <Navigate to='/home' />;
};
export default ProtectedRoute;
