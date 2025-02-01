import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {
      const trailerVideo = useSelector((store) => store.movies.trailerVideo);
      useMovieTrailer(movieId);

  return (
    <div className="pt-10 lg:pt-0"> 
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?rel=0&autoplay=1&mute=1&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      ></iframe>
    </div>
  //   <div className="pt-10 lg:pt-0">
  //   <iframe
  //     className="w-full aspect-video"
  //     src={
  //       "https://www.youtube.com/embed/" +
  //       movieTrailer?.key +
  //       "?rel=0&autoplay=1&mute=1&loop=1&playlist=" +
  //       movieTrailer?.key
  //     }
  //     title="YouTube video player"
  //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
  //   ></iframe>
  // </div>
  );
};
export default VideoBackground;
