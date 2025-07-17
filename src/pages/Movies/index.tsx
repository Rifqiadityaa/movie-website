import MovieCard from "@components/MovieCard";
import useGetMoviesByFilters from "@hooks/useGetMoviesByFilter";
import useInfiniteScroll from "@hooks/useInfiniteScroll";
import { isEmpty } from "@utils/index";
import { Fragment, useEffect, type ReactNode } from "react";

const MoviesPage = (): ReactNode => {
  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetMoviesByFilters();

  const { lastElementRef, cleanup } = useInfiniteScroll({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isLoading,
    threshold: 0.8,
  });

  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-700 aspect-[3/4] rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    );
  }

  if (!data || isEmpty(data.pages)) {
    return (
      <div className="text-center text-gray-500 text-lg font-semibold">
        No movies found.
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 text-lg font-semibold">
        Failed to load movies. Please try again later.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
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
                  releaseDate={movie.release_date || "Unknown Release Date"}
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
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
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

export default MoviesPage;
