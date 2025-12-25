import ContentCard from "../ContentCard";
import { TrendingUp, Users, Zap } from "lucide-react";

const TextContentContainer = () => {
  return (
    <ContentCard title="Welcome Back!" delay={150}>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        Your dashboard is ready with the latest updates. Explore our new features and discover what's trending in your network.
      </p>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-200">
          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="font-medium text-sm text-foreground">Growth Report</p>
            <p className="text-xs text-muted-foreground">+23% this month</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-200">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-medium text-sm text-foreground">Active Users</p>
            <p className="text-xs text-muted-foreground">1,234 online now</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-200">
          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
            <Zap className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="font-medium text-sm text-foreground">Quick Actions</p>
            <p className="text-xs text-muted-foreground">5 pending tasks</p>
          </div>
        </div>
      </div>
    </ContentCard>
  );
};

export default TextContentContainer;
