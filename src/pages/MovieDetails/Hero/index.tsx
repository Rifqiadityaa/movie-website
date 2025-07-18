import MovieCard from "@components/MovieCard";
import { TMDB_IMG_BASE_URL, TMDB_IMG_RES } from "@constants/tmdb";
import type { MovieDetails200Response } from "@lib/services/tmdb-api/v3.0";
import { MoveLeft } from "lucide-react";
import type { FC } from "react";
import { useNavigate } from "react-router";
import MovieOverview from "./MovieOverview";

interface IHero {
  movieDetails: MovieDetails200Response;
}

const Hero: FC<IHero> = ({ movieDetails }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={"h-[50vh] md:h-screen relative"}>
        <button
          className="absolute z-99 top-7 left-10 hover:scale-125 transition-transform duration-200 hover:cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <MoveLeft className="w-7 h-7" />
        </button>
        {/* image and overlay*/}
        <div className="relative h-full w-full flex justify-center items-center">
          <img
            src={`${TMDB_IMG_BASE_URL}${TMDB_IMG_RES.backdrop.original}${movieDetails.backdrop_path}`}
            alt={`${movieDetails.title} poster`}
            className="object-cover w-full h-full absolute"
          />
          <div className="absolute h-full w-full bg-[linear-gradient(0deg,_rgba(20,20,20,1)_5%,_rgba(20,20,20,0)_50%)] md:bg-[linear-gradient(0deg,_rgba(20,20,20,1)_5%,_rgba(20,20,20,0.85)_10%)]" />
          <div className="hidden md:flex flex-col md:flex-row justify-center items-center relative gap-16 px-9 md:px-28 w-full">
            <div className="w-full md:w-1/3 h-full flex justify-center items-center">
              <MovieCard
                showAnimation={false}
                posterPath={`${TMDB_IMG_BASE_URL}${TMDB_IMG_RES.poster.original}${movieDetails.poster_path}`}
                title={movieDetails.title ?? ""}
                releaseDate={movieDetails.release_date ?? ""}
              />
            </div>
            <MovieOverview movieDetails={movieDetails} />
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col justify-center gap-4 px-9">
        <MovieOverview movieDetails={movieDetails} />
      </div>
    </div>
  );
};

export default Hero;
