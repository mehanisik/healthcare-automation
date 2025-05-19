import { PopIn } from '#/components/motion';

type TrustBadgeProps = {
  readonly icon: React.ReactNode;
  readonly text: string;
  readonly delay?: number;
};

export const TrustBadge = ({ icon, text, delay = 0 }: TrustBadgeProps) => (
  <PopIn delay={delay}>
    <div
      className="flex items-center gap-2 bg-muted text-muted-foreground border border-border rounded-md px-3 py-1.5 cursor-pointer transition-all duration-200 hover:border-primary/50 hover:bg-muted/70 dark:hover:bg-muted/40 hover:scale-105"
    >
      {icon}
      <span className="text-sm">{text}</span>
    </div>
  </PopIn>
);
