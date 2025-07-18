import { Input } from "@components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import useDebounce from "@hooks/useDebounce";
import type { DiscoverMovieRequest } from "@lib/services/tmdb-api/v3.0";
import { addMonths } from "date-fns";
import { useState, type ReactNode } from "react";
import FilteredResults from "./FilteredResults";
import SearchResults from "./SearchResults";

interface IDiscoverMovieParams {
  nowPlaying: DiscoverMovieRequest;
  popular: DiscoverMovieRequest;
  topRated: DiscoverMovieRequest;
  upcoming: DiscoverMovieRequest;
}

const discoverMovieParams: IDiscoverMovieParams = {
  nowPlaying: {
    includeVideo: false,
    language: "en-US",
    sortBy: "popularity.desc",
    withReleaseType: 2 | 3,
    releaseDateGte: new Date(),
    releaseDateLte: addMonths(new Date(), 1),
  },
  popular: {
    includeVideo: false,
    language: "en-US",
    sortBy: "popularity.desc",
  },
  topRated: {
    includeVideo: false,
    language: "en-US",
    sortBy: "vote_average.desc",
    withoutGenres: "99,10755",
    voteCountGte: 200,
  },
  upcoming: {
    includeVideo: false,
    language: "en-US",
    sortBy: "popularity.desc",
    withReleaseType: 2 | 3,
    region: "US",
    releaseDateGte: addMonths(new Date(), 1),
    releaseDateLte: addMonths(new Date(), 2),
  },
};

const MoviesPage = (): ReactNode => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filter, setFilter] =
    useState<keyof IDiscoverMovieParams>("nowPlaying");

  const debouncedSearchQuery = useDebounce<string>(searchQuery, 500);
  const isSearchMode = debouncedSearchQuery.length > 0;

  return (
    <div className="p-4">
      <div className="grid grid-cols-6 gap-2 mb-5 sm:mb-0">
        <Input
          className="text-black mb-0 sm:mb-5 col-span-6 sm:col-span-4 lg:col-span-5"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <Select
          value={filter}
          onValueChange={(value) =>
            setFilter(value as keyof IDiscoverMovieParams)
          }
        >
          <SelectTrigger className="w-full col-span-6 sm:col-span-2 lg:col-span-1 text-black">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nowPlaying">Now Playing</SelectItem>
            <SelectItem value="popular">Popular</SelectItem>
            <SelectItem value="topRated">Top Rated</SelectItem>
            <SelectItem value="upcoming">Upcoming</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {isSearchMode ? (
        <SearchResults searchQuery={debouncedSearchQuery} />
      ) : (
        <FilteredResults
          enabled={!isSearchMode}
          params={discoverMovieParams[filter]}
        />
      )}
    </div>
  );
};

export default MoviesPage;
