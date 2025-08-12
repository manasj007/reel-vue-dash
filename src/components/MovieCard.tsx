import { Star, Calendar, Clock } from "lucide-react";
import { Movie } from "@/data/movies";

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  return (
    <div 
      className="movie-card bg-card rounded-xl overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      {/* Movie Poster */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
          <Star className="h-3 w-3 text-yellow-400 fill-current" />
          <span className="text-xs font-medium text-white">{movie.rating}</span>
        </div>

        {/* Hover Details */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center space-x-4 text-white/90 text-xs">
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{movie.releaseYear}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{movie.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {movie.title}
        </h3>
        
        {/* Genres */}
        <div className="flex flex-wrap gap-1 mb-2">
          {movie.genre.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
            >
              {genre}
            </span>
          ))}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {movie.description}
        </p>
      </div>
    </div>
  );
};