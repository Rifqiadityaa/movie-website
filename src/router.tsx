import { createBrowserRouter, Navigate } from "react-router";
import PageContainer from "./layouts/PageContainer";
import MoviesPage from "./pages/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/movies" replace />,
  },
  {
    element: <PageContainer />,
    children: [{ path: "/movies", element: <MoviesPage /> }],
  },
]);

export default router;
