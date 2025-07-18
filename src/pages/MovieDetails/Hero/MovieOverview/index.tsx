import { Badge } from "@components/ui/badge";
import type { MovieDetails200Response } from "@lib/services/tmdb-api/v3.0";
import { Star } from "lucide-react";
import type { FC } from "react";

interface IMovieOverview {
  movieDetails: MovieDetails200Response;
}

const MovieOverview: FC<IMovieOverview> = ({ movieDetails }) => {
  const renderStarsByAvgRating = (rating: number) => {
    //because avg rating from the api is out of 10, we divide it by 2 to get the scale of 5, then round it to the nearest bottom 0.5
    const formattedRating = parseFloat((Math.floor(rating) / 2).toFixed(1));

    return Array.from({ length: 5 }).map((_, i) => {
      if (formattedRating >= i + 1) {
        return <Star key={i} fill="currentColor" />;
      } else if (formattedRating > i) {
        return <Star key={i} fill="currentColor" fillOpacity="0.5" />;
      }
      return <Star key={i} />;
    });
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-[500px]">
      <div>
        <h1 className="text-white text-3xl md:text-4xl font-bold">
          {movieDetails.title}
        </h1>
        <h3 className="text-gray-400 text-base md:text-lg">
          {movieDetails.tagline}
        </h3>
      </div>
      <div className="flex items-center">
        {renderStarsByAvgRating(movieDetails.vote_average ?? 0)}
        <p className="text-white text-sm ml-2">
          {`(${movieDetails.vote_count ?? 0} votes)`}
        </p>
      </div>
      <div>
        {movieDetails.genres?.map((genre) => (
          <span key={genre.id} className="text-grey-60 mr-2">
            <Badge className="bg-blackShades-12 text-red-45 border border-blackShades-20">
              {genre.name}
            </Badge>
          </span>
        ))}
      </div>
      <p className="text-white text-sm leading-6">{movieDetails.overview}</p>
    </div>
  );
};

export default MovieOverview;
