import { Film, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const Header = ({ searchTerm, onSearchChange }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-primary">
            <Film className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-foreground">CineVault</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
            Home
          </a>
          <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
            Popular
          </a>
          <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
            Genres
          </a>
          <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-md mx-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-card/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300"
          />
        </div>
      </div>
    </header>
  );
};