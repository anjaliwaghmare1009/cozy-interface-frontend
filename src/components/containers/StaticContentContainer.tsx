import ContentCard from "../ContentCard";

const StaticContentContainer = () => {
  return (
    <ContentCard delay={250}>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="w-full sm:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
            alt="Team collaboration"
            className="w-full h-40 sm:h-48 object-cover rounded-xl"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Featured</span>
          <h4 className="text-lg font-bold text-foreground mt-1 mb-2">
            Collaborative Workspaces
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Transform your team's productivity with our innovative workspace solutions. Built for modern teams who demand excellence.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-xs font-medium"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">+12 team members</span>
          </div>
        </div>
      </div>
    </ContentCard>
  );
};

export default StaticContentContainer;
