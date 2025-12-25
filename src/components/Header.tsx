import { Menu, X, Bell, Search } from "lucide-react";

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Header = ({ isSidebarOpen, toggleSidebar }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-header text-header-foreground shadow-lg">
      <div className="flex h-full items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-sidebar-accent transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">L</span>
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">Lumina</span>
          </div>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-sidebar-accent/50 border-none rounded-lg py-2 pl-10 pr-4 text-sm text-header-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors duration-200 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
          </button>
          
          <div className="w-9 h-9 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
            <span className="text-sm font-semibold text-accent">JD</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
