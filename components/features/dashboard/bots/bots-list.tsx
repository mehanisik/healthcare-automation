'use client';
import type { Bot, BotCategory } from './types';

import { Badge } from '#/components/ui/badge';
import { Button } from '#/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '#/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '#/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '#/components/ui/tabs';
import { botStatusColor, categoryColor, priorityColor } from '#/components/utilities/statusColors';
import { useState } from 'react';
import { categoryConfig, priorityConfig, statusConfig } from './config';
import { CreateBot } from './create-bot';

export function BotsList({ bots }: { bots: Bot[] }) {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('table');
  const [selectedBot, setSelectedBot] = useState<Bot | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<BotCategory | 'all'>('all');

  const filteredBots = selectedCategory === 'all'
    ? bots
    : bots.filter(bot => bot.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Bots</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'table' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('table')}
            >
              Table
            </Button>
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              Grid
            </Button>
          </div>
          <CreateBot />
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all" onClick={() => setSelectedCategory('all')}>All</TabsTrigger>
          <TabsTrigger value="claims" onClick={() => setSelectedCategory('claims')}>Claims</TabsTrigger>
          <TabsTrigger value="data-sync" onClick={() => setSelectedCategory('data-sync')}>Data Sync</TabsTrigger>
          <TabsTrigger value="report" onClick={() => setSelectedCategory('report')}>Reports</TabsTrigger>
          <TabsTrigger value="records" onClick={() => setSelectedCategory('records')}>Records</TabsTrigger>
          <TabsTrigger value="billing" onClick={() => setSelectedCategory('billing')}>Billing</TabsTrigger>
          <TabsTrigger value="compliance" onClick={() => setSelectedCategory('compliance')}>Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedCategory} className="space-y-4">
          {viewMode === 'table'
            ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead>Tasks</TableHead>
                      <TableHead>Uptime</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBots.map((bot) => {
                      const StatusIcon = statusConfig[bot.status].icon;
                      return (
                        <TableRow
                          key={bot.id}
                          className="cursor-pointer hover:bg-muted/50"
                          onClick={() => setSelectedBot(bot)}
                        >
                          <TableCell className="font-medium">{bot.name}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className={`${botStatusColor[bot.status]} text-white`}>
                              <StatusIcon className="mr-1 h-3 w-3" />
                              {statusConfig[bot.status].text}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className={categoryColor[bot.category]}>
                              {categoryConfig[bot.category].text}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className={priorityColor[bot.priority]}>
                              {priorityConfig[bot.priority].text}
                            </Badge>
                          </TableCell>
                          <TableCell>{new Date(bot.lastActive).toLocaleString()}</TableCell>
                          <TableCell>{bot.tasksCompleted}</TableCell>
                          <TableCell>{bot.uptime}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              )
            : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {filteredBots.map((bot) => {
                    const StatusIcon = statusConfig[bot.status].icon;
                    return (
                      <Card
                        key={bot.id}
                        className="cursor-pointer transition-colors hover:bg-muted/50"
                        onClick={() => setSelectedBot(bot)}
                      >
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">{bot.name}</CardTitle>
                          <StatusIcon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">Status</span>
                              <Badge variant="outline" className={botStatusColor[bot.status]}>
                                {statusConfig[bot.status].text}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">Category</span>
                              <Badge variant="outline" className={categoryColor[bot.category]}>
                                {categoryConfig[bot.category].text}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">Priority</span>
                              <Badge variant="outline" className={priorityColor[bot.priority]}>
                                {priorityConfig[bot.priority].text}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">Last Active</span>
                              <span className="text-sm">{new Date(bot.lastActive).toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">Tasks Completed</span>
                              <span className="text-sm">{bot.tasksCompleted}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">Uptime</span>
                              <span className="text-sm">{bot.uptime}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
        </TabsContent>
      </Tabs>

      <Dialog open={!!selectedBot} onOpenChange={() => setSelectedBot(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedBot?.name}</DialogTitle>
          </DialogHeader>
          {selectedBot && (
            <div className="grid gap-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Performance Metrics</h3>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Success Rate</span>
                      <span className="text-sm">
                        {selectedBot.performance.successRate}
                        %
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Error Rate</span>
                      <span className="text-sm">
                        {selectedBot.performance.errorRate}
                        %
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Execution Time</span>
                      <span className="text-sm">{selectedBot.performance.executionTime}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Schedule</h3>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Frequency</span>
                      <span className="text-sm">{selectedBot.schedule.frequency}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Next Run</span>
                      <span className="text-sm">{new Date(selectedBot.schedule.nextRun).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Time Zone</span>
                      <span className="text-sm">{selectedBot.schedule.timeZone}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Resource Usage</h3>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">CPU</span>
                      <span className="text-sm">{selectedBot.resources.cpu}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Memory</span>
                      <span className="text-sm">{selectedBot.resources.memory}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Storage</span>
                      <span className="text-sm">{selectedBot.resources.storage}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Automation Details</h3>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Type</span>
                      <span className="text-sm">{selectedBot.automation.type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Complexity</span>
                      <span className="text-sm">{selectedBot.automation.complexity}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Last Updated</span>
                      <span className="text-sm">{new Date(selectedBot.automation.lastUpdated).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Integrations</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedBot.automation.integrations.map(integration => (
                    <Badge key={integration} variant="secondary">
                      {integration}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
