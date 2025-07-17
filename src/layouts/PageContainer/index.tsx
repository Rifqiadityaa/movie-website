import type { ReactNode } from "react";
import { Outlet } from "react-router";

const PageContainer = (): ReactNode => {
  return (
    <div className="mx-auto p-4 max-w-[1400px] text-white min-h-screen">
      <Outlet />
    </div>
  );
};

export default PageContainer;
