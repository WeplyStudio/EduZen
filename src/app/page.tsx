import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, CheckSquare, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold font-headline text-foreground">EduZen</h1>
        </div>
        <Button asChild>
          <Link href="/dashboard">
            Go to App <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </header>

      <main className="flex-grow">
        <section className="relative text-center py-20 sm:py-32 lg:py-40 px-4">
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground font-headline tracking-tight">
              The Minimalist Learning Hub for Modern Students
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamline your studies, collaborate with peers, and unlock your full potential with AI-powered tools. All in one focused, distraction-free space.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="/dashboard">
                  Get Started for Free
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
           <div
            className="absolute -bottom-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
            aria-hidden="true"
          />
        </section>

        <section className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold font-headline text-foreground">Everything You Need to Succeed</h3>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                EduZen brings together essential tools to help you stay organized and learn smarter.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<CheckSquare className="h-8 w-8 text-primary" />}
                title="Task Management"
                description="Create, assign, and track school-related tasks with deadlines and priority levels to stay on top of your work."
              />
              <FeatureCard
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Collaborative Workspace"
                description="A shared space for you and your classmates to work on projects, share resources, and discuss topics."
              />
              <FeatureCard
                icon={
                  <div className="relative h-8 w-8 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3h4"/><path d="M10 21h4"/><path d="M17 9v1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Z"/><path d="M7 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2Z"/><path d="M12 11v10"/></svg>
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-primary/80 items-center justify-center text-xs text-primary-foreground font-bold">AI</span>
                    </span>
                  </div>
                }
                title="AI-Powered Research"
                description="An intelligent tool that helps you find articles and information based on prompts to accelerate your learning."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} EduZen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="text-center bg-card">
      <CardHeader>
        <div className="mx-auto bg-accent/50 rounded-full p-3 w-fit">
          {icon}
        </div>
        <CardTitle className="mt-4 font-headline">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
