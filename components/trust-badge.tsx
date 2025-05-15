import { motion } from 'framer-motion';

export const TrustBadge: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
    className="flex items-center gap-2 bg-muted text-muted-foreground border border-border rounded-md px-3 py-1.5 cursor-pointer hover:border-primary/50 hover:bg-muted/70 dark:hover:bg-muted/40"
  >
    {icon}
    <span className="text-sm">{text}</span>
  </motion.div>
);
