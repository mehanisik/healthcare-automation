'use client';

import type { Bot, BotCategory, BotPriority } from './types';
import { createBotFn } from '#/actions/bots/create-bot';
import { Button } from '#/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '#/components/ui/dialog';
import { Input } from '#/components/ui/input';
import { Label } from '#/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#/components/ui/select';
import { useState } from 'react';

export function CreateBot() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: '' as BotCategory,
    priority: '' as BotPriority,
  });

  const handleCreateBot = async (formData: FormData) => {
    try {
      const bot = {
        name: formData.get('name') as string,
        category: formData.get('category') as BotCategory,
        priority: formData.get('priority') as BotPriority,
      };
      await createBotFn(bot as Bot);
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'An error occurred during createBot');
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Bot</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Bot</DialogTitle>
        </DialogHeader>
        <form action={handleCreateBot} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Bot Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select
              value={formData.category}
              onValueChange={value => setFormData({ ...formData, category: value as BotCategory })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="claims">Claims Processing</SelectItem>
                <SelectItem value="data-sync">Data Synchronization</SelectItem>
                <SelectItem value="report">Report Generation</SelectItem>
                <SelectItem value="records">Patient Records</SelectItem>
                <SelectItem value="billing">Billing</SelectItem>
                <SelectItem value="compliance">Compliance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="priority">Priority</Label>
            <Select
              value={formData.priority}
              onValueChange={value => setFormData({ ...formData, priority: value as BotPriority })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
