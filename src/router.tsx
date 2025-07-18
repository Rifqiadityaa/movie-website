import MovieDetailLayout from "@layouts/MovieDetailLayout";
import MoviesLayout from "@layouts/MoviesLayout";
import MovieDetailsPage from "@pages/MovieDetails";
import MoviesPage from "@pages/Movies";
import { createBrowserRouter, Navigate } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/movies" replace />,
  },
  {
    element: <MoviesLayout />,
    children: [{ path: "/movies", element: <MoviesPage /> }],
  },
  {
    element: <MovieDetailLayout />,
    children: [
      {
        path: "/movies/:id",
        element: <MovieDetailsPage />,
      },
    ],
  },
]);

export default router;
