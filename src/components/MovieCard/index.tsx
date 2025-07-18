import { TMDB_IMG_BASE_URL, TMDB_IMG_RES } from "@constants/tmdb";
import { type FC } from "react";

interface MovieCardProps {
  title: string;
  releaseDate: string;
  posterPath: string;
  onMouseEnter?: () => void;
  onClick?: () => void;
  showAnimation?: boolean;
}

const MovieCard: FC<MovieCardProps> = ({
  title,
  releaseDate,
  posterPath,
  onMouseEnter,
  onClick,
  showAnimation = true,
}) => {
  return (
    <div
      className={`bg-gray-800 rounded-lg shadow-md relative group overflow-hidden transform transition-all duration-300 h-full ${
        showAnimation &&
        "hover:-translate-y-1 hover:shadow-xl hover:cursor-pointer"
      }`}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      <img
        src={`${TMDB_IMG_BASE_URL}${TMDB_IMG_RES.poster.w500}${posterPath}`}
        alt={title}
        className={`w-full h-full object-cover transition-transform duration-400 ease-in-out ${
          showAnimation ? "scale-105" : ""
        }`}
      />
      {showAnimation && (
        <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-2/3 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <h2 className="text-xl font-bold text-white line-clamp-1 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
            {title}
          </h2>
          <p className="text-gray-300 text-sm transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
            {releaseDate}
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
