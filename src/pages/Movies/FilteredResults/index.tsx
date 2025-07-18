import REACT_QUERY_CACHE_KEYS from "@constants/cacheKey";
import { fetchMovieCredits } from "@hooks/useGetMovieCredits";
import { fetchMovieDetails } from "@hooks/useGetMovieDetail";
import useGetMoviesByFilters from "@hooks/useGetMoviesByFilter";
import usePrefetchQuery from "@hooks/usePrefetchQuery";
import type { DiscoverMovieRequest } from "@lib/services/tmdb-api/v3.0";
import { isEmpty } from "@utils/index";
import type { ReactNode } from "react";
import MovieList, { type MouseEnterWithMovieArg } from "../MovieList";

interface FilteredResultsProps {
  params?: DiscoverMovieRequest;
  enabled?: boolean;
}

const FilteredResults = ({
  params = {},
  enabled = true,
}: FilteredResultsProps): ReactNode => {
  const { data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } =
    useGetMoviesByFilters(params, {
      enabled,
    });

  const { prefetch } = usePrefetchQuery();

  const onMouseEnter: MouseEnterWithMovieArg = (movie) => {
    if (isEmpty(movie.id)) return;

    const movieId = movie.id;

    prefetch({
      queryKey: [REACT_QUERY_CACHE_KEYS.getMovieDetails, movieId],
      queryFn: () =>
        fetchMovieDetails({
          movieId,
        }),
      staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    prefetch({
      queryKey: [REACT_QUERY_CACHE_KEYS.getMovieCredits, movieId],
      queryFn: () =>
        fetchMovieCredits({
          movieId,
        }),
      staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });
  };

  return (
    <MovieList
      data={data}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
      isLoading={isFetching}
      onMouseEnter={onMouseEnter}
    />
  );
};

export default FilteredResults;
