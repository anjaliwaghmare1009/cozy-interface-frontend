import { cn } from "@/lib/utils";

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  delay?: number;
}

const ContentCard = ({ children, className, title, delay = 0 }: ContentCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-2xl p-5 card-shadow transition-all duration-300 hover:card-shadow-lg opacity-0 animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {title && (
        <h3 className="text-lg font-semibold text-card-foreground mb-4">{title}</h3>
      )}
      {children}
    </div>
  );
};

export default ContentCard;
