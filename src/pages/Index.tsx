import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { FilterSidebar } from "@/components/FilterSidebar";
import { MovieCard } from "@/components/MovieCard";
import { MovieModal } from "@/components/MovieModal";
import { Footer } from "@/components/Footer";
import { movies, Movie } from "@/data/movies";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter movies based on search and filters
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          movie.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          movie.director.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesGenre = selectedGenre === "All" || movie.genre.includes(selectedGenre);
      const matchesRating = selectedRating === 0 || movie.rating >= selectedRating;
      const matchesYear = selectedYear === 0 || movie.releaseYear >= selectedYear;

      return matchesSearch && matchesGenre && matchesRating && matchesYear;
    });
  }, [searchTerm, selectedGenre, selectedRating, selectedYear]);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
      />

      <main className="container px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Discover Amazing Movies
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collection of the world's best films. From blockbusters to hidden gems.
            </p>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <FilterSidebar
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
            selectedRating={selectedRating}
            onRatingChange={setSelectedRating}
            selectedYear={selectedYear}
            onYearChange={setSelectedYear}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-foreground">
                {searchTerm ? `Search Results for "${searchTerm}"` : 'Featured Movies'}
              </h2>
              <span className="text-muted-foreground">
                {filteredMovies.length} movie{filteredMovies.length !== 1 ? 's' : ''} found
              </span>
            </div>

            {/* Movies Grid */}
            {filteredMovies.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMovies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onClick={() => handleMovieClick(movie)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No movies found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or filters to find more movies.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />

      {/* Movie Modal */}
      <MovieModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
