import type { Bot } from '#/types/bots';
import { BotsList } from './bots-list';

export const DashboardBots = ({ bots }: { bots: Bot[] }) => {
  return <BotsList bots={bots} />;
};
