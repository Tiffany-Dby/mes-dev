import { AppRoutes } from "@/shared/types/Routes";
import React from "react";
import { Navigate, Outlet } from "react-router";

interface PrivateRoutesProps {
  hasAccess: boolean;
  redirectPath?: string;
  children: React.ReactNode;
}

const PrivateRoutes = ({
  hasAccess,
  redirectPath = AppRoutes.signIn,
  children,
}: PrivateRoutesProps) => {
  if (!hasAccess) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoutes;
