import REACT_QUERY_CACHE_KEYS from "@constants/cacheKey";
import { apiClient } from "@lib/services/tmdb-api";
import type {
  MovieCredits200Response,
  MovieCreditsRequest,
  ResponseError,
} from "@lib/services/tmdb-api/v3.0";
import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

export const fetchMovieCredits = (params: MovieCreditsRequest) =>
  apiClient().movieCredits(params);

const useGetMovieCredits = (
  params: MovieCreditsRequest,
  options?: Omit<
    UseQueryOptions<
      MovieCredits200Response,
      ResponseError,
      MovieCredits200Response,
      [string, number]
    >,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: [REACT_QUERY_CACHE_KEYS.getMovieCredits, params.movieId],
    queryFn: () => fetchMovieCredits(params),
    ...options,
  });
};

export default useGetMovieCredits;
