import REACT_QUERY_CACHE_KEYS from "@constants/cacheKey";
import { apiClient } from "@lib/services/tmdb-api";
import type {
  ResponseError,
  SearchMovie200Response,
  SearchMovieRequest,
} from "@lib/services/tmdb-api/v3.0";
import type {
  InfiniteData,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchMoviesBySearchQuery = (params: SearchMovieRequest) =>
  apiClient().searchMovie({
    ...params,
    includeAdult: false,
  });

const useGetMoviesBySearchQuery = (
  params: SearchMovieRequest,
  options?: Omit<
    UseInfiniteQueryOptions<
      SearchMovie200Response,
      ResponseError,
      InfiniteData<SearchMovie200Response>,
      [string, SearchMovieRequest],
      number
    >,
    "queryKey" | "queryFn" | "initialPageParam" | "getNextPageParam"
  >
) => {
  return useInfiniteQuery({
    queryKey: [REACT_QUERY_CACHE_KEYS.getMoviesByFilter, params],
    queryFn: ({ pageParam }) =>
      fetchMoviesBySearchQuery({ ...params, page: pageParam }),
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

export default useGetMoviesBySearchQuery;
