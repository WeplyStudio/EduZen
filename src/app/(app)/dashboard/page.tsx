import { AppHeader } from '@/components/app-header';
import { Button } from '@/components/ui/button';
import { stats, courses } from '@/lib/data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { StatCard } from './components/stat-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CourseStack } from './components/course-stack';

export default function DashboardPage() {
  const heroImage1 =
    PlaceHolderImages.find((img) => img.id === 'hero-1')?.imageUrl || '';

  return (
    <div className="flex-1 flex flex-col bg-secondary/50">
      <AppHeader title="Dashboard" />
      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <section className="bg-card text-card-foreground rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="flex-1">
            <h2 className="text-4xl font-bold font-headline tracking-tight text-primary">
              Welcome back, Student!
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              Continue your learning journey and explore new courses. Let's make today a productive day.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Button size="lg" className="rounded-full">
                Explore Courses
              </Button>
            </div>
          </div>
          <div className="relative flex-1 hidden md:flex items-center justify-center">
            <Image
              src={heroImage1}
              alt="Happy student"
              width={400}
              height={300}
              className="rounded-xl object-cover"
              data-ai-hint="happy student studying"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>

        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold font-headline">
              Continue Your Learning
            </h3>
            <Button variant="ghost" asChild>
              <Link href="/courses">
                View All Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <CourseStack items={courses.slice(0, 4)} />
        </section>
      </main>
    </div>
  );
}
