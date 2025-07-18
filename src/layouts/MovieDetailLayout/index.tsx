import type { ReactNode } from "react";
import { Outlet } from "react-router";

const MovieDetailLayout = (): ReactNode => {
  return (
    <div className="text-white min-h-screen">
      <Outlet />
    </div>
  );
};

export default MovieDetailLayout;
