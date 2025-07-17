import MovieList from "@components/MovieList";
import useGetMoviesByFilters from "@hooks/useGetMoviesByFilter";
import type { DiscoverMovieRequest } from "@lib/services/tmdb-api/v3.0";
import type { ReactNode } from "react";

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

  return (
    <MovieList
      data={data}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
      isLoading={isFetching}
    />
  );
};

export default FilteredResults;
