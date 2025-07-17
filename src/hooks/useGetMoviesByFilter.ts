import REACT_QUERY_CACHE_KEYS from "@constants/cacheKey";
import { apiClient } from "@lib/services/tmdb-api";
import type {
  DiscoverMovie200Response,
  DiscoverMovieRequest,
  ResponseError,
} from "@lib/services/tmdb-api/v3.0";
import type {
  InfiniteData,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchMoviesByFilter = (page: number, filters?: DiscoverMovieRequest) =>
  apiClient().discoverMovie({
    ...filters,
    page,
    includeAdult: false,
    sortBy: "vote_count.desc",
  });

const useGetMoviesByFilters = (
  filters?: DiscoverMovieRequest,
  options?: Omit<
    UseInfiniteQueryOptions<
      DiscoverMovie200Response,
      ResponseError,
      InfiniteData<DiscoverMovie200Response>,
      [string, DiscoverMovieRequest],
      number
    >,
    "queryKey" | "queryFn" | "initialPageParam" | "getNextPageParam"
  >
) => {
  return useInfiniteQuery({
    queryKey: [REACT_QUERY_CACHE_KEYS.getMoviesByFilter, filters || {}],
    queryFn: ({ pageParam }) => fetchMoviesByFilter(pageParam, filters),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage?.page || !lastPage?.total_pages) {
        return undefined;
      }

      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
    ...options,
  });
};

export default useGetMoviesByFilters;
