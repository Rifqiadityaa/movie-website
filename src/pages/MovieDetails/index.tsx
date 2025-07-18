"use client";

import useGetMovieDetails from "@hooks/useGetMovieDetail";
import { useParams } from "react-router";
import Hero from "./Hero";

const MovieDetailsPage = () => {
  const { id } = useParams<"id">();

  const { data } = useGetMovieDetails({
    movieId: Number(id),
  });

  console.log(data);

  return (
    <div className="space-y-14">
      <Hero movieDetails={data ?? {}} />
      {/* <div className="px-9 pb-28 md:px-28 lg:px-40 space-y-14">
          <Cast />
          <Reviews />
        </div> */}
    </div>
  );
};

export default MovieDetailsPage;
