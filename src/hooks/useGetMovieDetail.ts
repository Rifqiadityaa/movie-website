import REACT_QUERY_CACHE_KEYS from "@constants/cacheKey";
import { apiClient } from "@lib/services/tmdb-api";
import type {
  MovieDetails200Response,
  MovieDetailsRequest,
  ResponseError,
} from "@lib/services/tmdb-api/v3.0";
import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

export const fetchMovieDetails = (params: MovieDetailsRequest) =>
  apiClient().movieDetails(params);

const useGetMovieDetails = (
  params: MovieDetailsRequest,
  options?: Omit<
    UseQueryOptions<
      MovieDetails200Response,
      ResponseError,
      MovieDetails200Response,
      [string, number]
    >,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: [REACT_QUERY_CACHE_KEYS.getMovieDetails, params.movieId],
    queryFn: () => fetchMovieDetails(params),
    ...options,
  });
};

export default useGetMovieDetails;
