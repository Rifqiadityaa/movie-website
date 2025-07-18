import type { ReactNode } from "react";
import { Outlet } from "react-router";

const MoviesLayout = (): ReactNode => {
  return (
    <div className="mx-auto max-w-[1400px] text-white min-h-screen">
      <Outlet />
    </div>
  );
};

export default MoviesLayout;
