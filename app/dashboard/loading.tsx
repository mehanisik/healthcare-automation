import { Skeleton } from '../../components/ui/skeleton';

export default function DashboardLoading() {
  return (
    <div className="flex h-screen bg-background">

      <main className="w-full flex flex-col bg-muted/40 dark:bg-zinc-900">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-border bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 py-4">
          <Skeleton className="h-8 w-8 sm:hidden rounded-full " />
          <Skeleton className="h-8 w-48 hidden sm:block " />
          <div className="ml-auto flex items-center gap-4">
            <Skeleton className="h-8 w-32 " />
            <Skeleton className="h-10 w-10 rounded-full dark:text-zinc-800    " />
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 sm:px-6 sm:py-0 space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[...Array.from({ length: 4 })].map((_, i) => (
              <Skeleton key={i} className="h-32 w-full rounded-lg " />
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <div className="md:col-span-4 space-y-4">
              <Skeleton className="h-64 w-full rounded-lg " />
              <Skeleton className="h-48 w-full rounded-lg " />
            </div>
            <div className="md:col-span-3 space-y-4">
              <Skeleton className="h-[416px] w-full rounded-lg " />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
