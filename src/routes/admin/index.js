import { Spin } from "antd";
import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import withAdminLayout from "../../layout/withAdminLayout";
const Dashboard = lazy(() => import("../../container/dashboard"));
const IBOSelection = lazy(() => import("../../container/charts/ChartJs.js"));
const NotFound = lazy(() => import("../../container/pages/404"));

const Admin = React.memo(() => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Suspense
      fallback={
        <div className="spin flex items-center justify-center bg-white dark:bg-dark h-screen w-full fixed z-[999] ltr:left-0 rtl:right-0 top-0">
          <Spin />
        </div>
      }
    >
      <Routes>
        <Route index path="/dashboard/*" element={<Dashboard />} />
        <Route path="/merchant/*" element={<IBOSelection />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});

export default withAdminLayout(Admin);
