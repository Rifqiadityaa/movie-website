import LoadingSkeleton from "@components/LoadingSkeleton";
import MovieCard from "@components/MovieCard";
import useInfiniteScroll from "@hooks/useInfiniteScroll";
import type {
  DiscoverMovie200Response,
  SearchMovie200Response,
} from "@lib/services/tmdb-api/v3.0";
import type { InfiniteData } from "@tanstack/react-query";
import { isEmpty } from "@utils/index";
import { Fragment, type ReactNode } from "react";

interface MovieListProps {
  data:
    | InfiniteData<DiscoverMovie200Response | SearchMovie200Response>
    | undefined;
  hasNextPage: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  isLoading: boolean;
}

const MovieList = ({
  data,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
  isLoading,
}: MovieListProps): ReactNode => {
  const lastElementRef = useInfiniteScroll({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  if (isLoading && !isFetchingNextPage) return <LoadingSkeleton />;

  if (!data || isEmpty(data.pages)) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {data.pages.map((group, i) => (
        <Fragment key={i}>
          {group.results?.map((movie, j) => {
            const isLastMovie =
              i === data.pages.length - 1 &&
              j === (group.results?.length || 0) - 1;

            return (
              <div key={movie.id} ref={isLastMovie ? lastElementRef : null}>
                <MovieCard
                  title={movie.original_title || "Untitled"}
                  releaseDate={
                    new Date(movie.release_date || "")
                      .getFullYear()
                      .toString() || "Unknown Release Date"
                  }
                  posterPath={movie.poster_path || ""}
                />
              </div>
            );
          })}
        </Fragment>
      ))}

      {/* Loading indicator for next page */}
      {isFetchingNextPage && (
        <div className="col-span-full text-center py-4">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        </div>
      )}

      {/* End of results indicator */}
      {!hasNextPage && data.pages.length > 0 && (
        <div className="col-span-full text-center py-4 text-gray-500">
          No more movies to load
        </div>
      )}
    </div>
  );
};

export default MovieList;
