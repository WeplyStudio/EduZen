import { AppHeader } from '@/components/app-header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { messages } from '@/lib/data';
import { Paperclip, SendHorizonal } from 'lucide-react';

export default function WorkspacePage() {
  return (
    <div className="flex flex-col h-full bg-background">
      <AppHeader title="Collaborative Workspace" />
      <main className="flex-1 flex flex-col p-4 md:p-6 lg:p-8 overflow-hidden">
        <Card className="flex-1 flex flex-col">
            <CardHeader>
                <CardTitle>Project Group: History Essay</CardTitle>
                <CardDescription>A shared space to collaborate on the upcoming history essay.</CardDescription>
            </CardHeader>
          <CardContent className="flex-1 p-0">
            <ScrollArea className="h-full px-6 py-4">
              <div className="space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-3 ${
                      message.user.name === 'You' ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <Avatar className="h-9 w-9 border">
                      <AvatarImage src={message.user.avatarUrl} data-ai-hint="person portrait" />
                      <AvatarFallback>
                        {message.user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg p-3 ${
                        message.user.name === 'You'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary'
                      }`}
                    >
                      <p className="font-semibold text-sm mb-1">
                        {message.user.name}
                      </p>
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 opacity-75 ${
                        message.user.name === 'You' ? 'text-right' : 'text-left'
                      }`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="pt-6">
            <form className="flex w-full items-center gap-2">
              <Button variant="ghost" size="icon">
                <Paperclip className="h-5 w-5" />
                <span className="sr-only">Attach file</span>
              </Button>
              <Input
                id="message"
                placeholder="Type your message..."
                className="flex-1"
                autoComplete="off"
              />
              <Button type="submit" size="icon">
                <SendHorizonal className="h-5 w-5" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
