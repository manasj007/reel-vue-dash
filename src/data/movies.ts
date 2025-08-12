export interface Movie {
  id: number;
  title: string;
  poster: string;
  genre: string[];
  rating: number;
  releaseYear: number;
  description: string;
  director: string;
  cast: string[];
  duration: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Interstellar",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    genre: ["Sci-Fi", "Drama"],
    rating: 8.6,
    releaseYear: 2014,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    duration: "2h 49m"
  },
  {
    id: 2,
    title: "The Dark Knight",
    poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=750&fit=crop",
    genre: ["Action", "Crime", "Drama"],
    rating: 9.0,
    releaseYear: 2008,
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    duration: "2h 32m"
  },
  {
    id: 3,
    title: "Inception",
    poster: "https://images.unsplash.com/photo-1489599316159-5c2e0bcfaaa8?w=500&h=750&fit=crop",
    genre: ["Action", "Sci-Fi", "Thriller"],
    rating: 8.8,
    releaseYear: 2010,
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into a CEO's mind.",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"],
    duration: "2h 28m"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    poster: "https://images.unsplash.com/photo-1489599316159-5c2e0bcfaaa8?w=500&h=750&fit=crop",
    genre: ["Crime", "Drama"],
    rating: 8.9,
    releaseYear: 1994,
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    duration: "2h 34m"
  },
  {
    id: 5,
    title: "The Matrix",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    genre: ["Action", "Sci-Fi"],
    rating: 8.7,
    releaseYear: 1999,
    description: "A computer programmer discovers that reality as he knows it is a simulation and joins a rebellion to free mankind from the machines.",
    director: "The Wachowskis",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    duration: "2h 16m"
  },
  {
    id: 6,
    title: "Parasite",
    poster: "https://images.unsplash.com/photo-1489599316159-5c2e0bcfaaa8?w=500&h=750&fit=crop",
    genre: ["Comedy", "Drama", "Thriller"],
    rating: 8.5,
    releaseYear: 2019,
    description: "A poor family schemes to become employed by a wealthy family by infiltrating their household and posing as unrelated, highly qualified individuals.",
    director: "Bong Joon-ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    duration: "2h 12m"
  },
  {
    id: 7,
    title: "Dune",
    poster: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=750&fit=crop",
    genre: ["Action", "Adventure", "Drama"],
    rating: 8.0,
    releaseYear: 2021,
    description: "Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis and secure the most valuable resource in the galaxy.",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
    duration: "2h 35m"
  },
  {
    id: 8,
    title: "Avatar",
    poster: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=750&fit=crop",
    genre: ["Action", "Adventure", "Fantasy"],
    rating: 7.9,
    releaseYear: 2009,
    description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    duration: "2h 42m"
  }
];

export const genres = [
  "All",
  "Action",
  "Adventure", 
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
  "Sci-Fi",
  "Thriller"
];