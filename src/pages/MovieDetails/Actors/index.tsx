import useGetMovieCredits from "@hooks/useGetMovieCredits";
import type { FC } from "react";
import ActorList from "./ActorList";

interface IActors {
  movieId: number;
}

const Actors: FC<IActors> = ({ movieId }) => {
  const { data, isLoading } = useGetMovieCredits({
    movieId: Number(movieId),
  });

  return (
    <div className="px-9 md:px-28 w-full">
      <h1 className="text-3xl font-bold mb-4">Actors</h1>
      <p className="text-gray-600">
        <ActorList data={data?.cast || []} isLoading={isLoading} />
      </p>
    </div>
  );
};

export default Actors;
