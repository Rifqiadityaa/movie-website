"use client";

import useGetMovieDetails from "@hooks/useGetMovieDetail";
import { useEffect } from "react";
import { useParams } from "react-router";
import Actors from "./Actors";
import Hero from "./Hero";

const MovieDetailsPage = () => {
  const { id } = useParams<"id">();

  const { data } = useGetMovieDetails({
    movieId: Number(id),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-10 space-y-10 md:space-y-0">
      <Hero movieDetails={data ?? {}} />
      <Actors movieId={Number(id)} />
    </div>
  );
};

export default MovieDetailsPage;
