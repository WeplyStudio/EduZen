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
  const heroImage2 =
    PlaceHolderImages.find((img) => img.id === 'hero-2')?.imageUrl || '';
  return (
    <div className="flex-1 flex flex-col bg-background">
      <AppHeader title="Dashboard" />
      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <section className="bg-card text-card-foreground rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-4xl font-bold font-headline tracking-tight">
              Putting your child's Future in great motion
            </h2>
            <p className="mt-4 text-muted-foreground">
              We don't just give our students only lecture but real life
              experience.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Button size="lg" className="rounded-full">
                Start learning
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Math & English</span>
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>All level</span>
              </div>
            </div>
          </div>
          <div className="relative flex-1 hidden md:flex items-center justify-center">
            <Image
              src={heroImage1}
              alt="Happy student"
              width={200}
              height={250}
              className="rounded-xl object-cover z-10"
              data-ai-hint="happy student"
            />
            <Image
              src={heroImage2}
              alt="Happy student"
              width={200}
              height={250}
              className="rounded-xl object-cover absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4"
              data-ai-hint="happy student"
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
              Smart and clever kids ready to fly high!
            </h3>
            <Button variant="ghost" asChild>
              <Link href="/courses">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <CourseStack items={courses.slice(0, 4)} />
        </section>

      </main>
    </div>
  );
}
