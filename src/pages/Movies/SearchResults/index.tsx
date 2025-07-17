import MovieList from "@components/MovieList";
import useGetMoviesBySearchQuery from "@hooks/useGetMovieBySearchQuery";
import type { ReactNode } from "react";

interface SearchResultsProps {
  searchQuery: string;
}

const SearchResults = ({ searchQuery }: SearchResultsProps): ReactNode => {
  const { data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } =
    useGetMoviesBySearchQuery(
      {
        query: searchQuery,
      },
      {
        enabled: searchQuery.length > 0,
      }
    );

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

export default SearchResults;
