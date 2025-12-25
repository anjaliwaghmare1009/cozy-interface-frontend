import { Home, LayoutGrid, Image, FileText, Settings, HelpCircle, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: LayoutGrid, label: "Components" },
  { icon: Image, label: "Gallery" },
  { icon: FileText, label: "Documents" },
  { icon: Settings, label: "Settings" },
  { icon: HelpCircle, label: "Help & Support" },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 bg-sidebar text-sidebar-foreground transition-transform duration-300 ease-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="flex flex-col h-full p-4">
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={item.label}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group",
                  item.active
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                    : "hover:bg-sidebar-accent text-sidebar-foreground"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.active && (
                  <ChevronRight className="h-4 w-4 opacity-70" />
                )}
              </button>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-sidebar-border">
            <div className="bg-sidebar-accent rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-sidebar-primary flex items-center justify-center">
                  <span className="text-sidebar-primary-foreground font-bold">✨</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Go Premium</p>
                  <p className="text-xs text-sidebar-foreground/70">Unlock all features</p>
                </div>
              </div>
              <button className="w-full py-2 px-4 bg-sidebar-primary text-sidebar-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200">
                Upgrade Now
              </button>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
