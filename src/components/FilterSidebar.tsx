import { genres } from "@/data/movies";

interface FilterSidebarProps {
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  selectedRating: number;
  onRatingChange: (rating: number) => void;
  selectedYear: number;
  onYearChange: (year: number) => void;
}

export const FilterSidebar = ({
  selectedGenre,
  onGenreChange,
  selectedRating,
  onRatingChange,
  selectedYear,
  onYearChange
}: FilterSidebarProps) => {
  const years = [0, 2020, 2015, 2010, 2005, 2000];
  const ratings = [0, 8.0, 8.5, 9.0];

  return (
    <aside className="w-64 bg-card rounded-xl p-6 shadow-card h-fit sticky top-24">
      <h3 className="text-lg font-semibold mb-6 text-foreground">Filters</h3>
      
      {/* Genre Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wide">
          Genre
        </h4>
        <div className="space-y-2">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => onGenreChange(genre)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                selectedGenre === genre
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wide">
          Minimum Rating
        </h4>
        <div className="space-y-2">
          {ratings.map((rating) => (
            <button
              key={rating}
              onClick={() => onRatingChange(rating)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                selectedRating === rating
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {rating === 0 ? "Any Rating" : `${rating}+ Stars`}
            </button>
          ))}
        </div>
      </div>

      {/* Year Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wide">
          Release Year
        </h4>
        <div className="space-y-2">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => onYearChange(year)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                selectedYear === year
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {year === 0 ? "Any Year" : `${year}+`}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};