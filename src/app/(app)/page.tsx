import { AppHeader } from '@/components/app-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { tasks, messages } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function DashboardPage() {
  const upcomingTasks = tasks
    .filter((task) => task.status !== 'Done')
    .slice(0, 3);
  const recentMessages = messages.slice(-3);

  const getPriorityVariant = (priority: 'High' | 'Medium' | 'Low') => {
    switch (priority) {
      case 'High':
        return 'destructive';
      case 'Medium':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-background">
      <AppHeader title="Dashboard" />
      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Upcoming Tasks</CardTitle>
                <CardDescription>
                  Your most urgent tasks. Stay focused!
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/tasks">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardHeader>
            <CardContent>
              {upcomingTasks.length > 0 ? (
                <ul className="space-y-4">
                  {upcomingTasks.map((task) => (
                    <li key={task.id} className="flex items-center justify-between">
                      <div className="font-medium">{task.title}</div>
                      <div className="flex items-center gap-4">
                         <Badge variant={getPriorityVariant(task.priority)}>{task.priority}</Badge>
                         <span className="text-sm text-muted-foreground">{task.dueDate.toLocaleDateString()}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                    <p>No upcoming tasks. You're all caught up!</p>
                </div>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Workspace</CardTitle>
                <CardDescription>Recent discussions.</CardDescription>
              </div>
                <Button variant="ghost" size="sm" asChild>
                    <Link href="/workspace">View <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {recentMessages.map((message) => (
                  <li key={message.id} className="flex items-start gap-3">
                    <Avatar className="h-8 w-8 border">
                      <AvatarImage src={message.user.avatarUrl} data-ai-hint="person portrait" />
                      <AvatarFallback>{message.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium">{message.user.name}</p>
                      <p className="text-muted-foreground truncate">{message.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>AI Research Assistant</CardTitle>
                <CardDescription>
                  Stuck on a topic? Get a head start with our AI-powered research tool.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-6 bg-accent/50 rounded-lg">
                    <div>
                        <h3 className="text-lg font-semibold">Unlock New Insights</h3>
                        <p className="text-muted-foreground mt-1">Generate summaries, find articles, and understand complex subjects faster.</p>
                    </div>
                    <Button asChild>
                        <Link href="/research">Start Researching</Link>
                    </Button>
                </div>
              </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
