import React, { useEffect } from "react";
import MovieCard from "../../shared/Card";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { fetchMovie } from "../../store/slice/movieSlice";

const HomeContainer: React.FC = () => {
  const movies = useAppSelector((state) => state?.movie?.movies);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovie());
  }, [dispatch]);

  return (
    <div className="text-white">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        {movies.map((item) => (
          <MovieCard key={item.Title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default HomeContainer;
