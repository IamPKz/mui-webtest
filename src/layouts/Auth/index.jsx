import { Suspense } from 'react';
import { Outlet, Navigate } from "react-router-dom";

export default function AuthLayout() {
  const userType = localStorage.getItem('userType');
  const isLoggedin = localStorage.getItem('isLoggedin');

  if (isLoggedin) {
    /* eslint-disable no-else-return */
    if (userType === "user") {
      return <Navigate to="/rawlogs" replace />;
    } else if (userType === "admin") {
      return <Navigate to="/usermanagement" replace />;
    }
    return <Navigate to="/" replace />;
    /* eslint-enable no-else-return */
  }

  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};
