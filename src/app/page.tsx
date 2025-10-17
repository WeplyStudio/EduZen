
'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Check, CheckCircle, CheckSquare, Heart, Star, Sun, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function LandingPage() {
  const heroImage1 =
    PlaceHolderImages.find((img) => img.id === 'hero-1')?.imageUrl || '';
  const heroImage2 =
    PlaceHolderImages.find((img) => img.id === 'hero-2')?.imageUrl || '';
  const empowerImage =
    PlaceHolderImages.find((img) => img.id === 'empower-1')?.imageUrl || '';
  const confidenceImage =
    PlaceHolderImages.find((img) => img.id === 'confidence-1')?.imageUrl || '';
   const buildingImage =
    PlaceHolderImages.find((img) => img.id === 'building-1')?.imageUrl || '';


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="fixed top-4 left-1/2 -translate-x-1/2 container z-50">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between rounded-full bg-white/70 px-6 backdrop-blur-sm shadow-md border border-white/50">
          <div className="flex items-center gap-2">
            <BookOpen className="h-7 w-7 text-primary" />
            <h1 className="text-xl font-bold font-headline">Edukids</h1>
          </div>
          <nav className="hidden md:flex items-center gap-1">
              <Link href="#" className="text-sm font-medium hover:bg-black/5 rounded-full px-4 py-2 transition-colors">About</Link>
              <Link href="#" className="text-sm font-medium hover:bg-black/5 rounded-full px-4 py-2 transition-colors">Program</Link>
              <Link href="#" className="text-sm font-medium hover:bg-black/5 rounded-full px-4 py-2 transition-colors">Features</Link>
              <Link href="#" className="text-sm font-medium hover:bg-black/5 rounded-full px-4 py-2 transition-colors">Pricing</Link>
              <Link href="#" className="text-sm font-medium hover:bg-black/5 rounded-full px-4 py-2 transition-colors">Instructor</Link>
          </nav>
          <Button asChild className="rounded-full">
            <Link href="/dashboard">
              Get Started
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative text-center pt-32 pb-32 px-4">
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-headline tracking-tight">
              Putting your child's Future in great motion
            </h2>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Math & English</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>All level</span>
                </div>
                 <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>For free all lectures</span>
                </div>
            </div>
            <div className="mt-8">
              <Button size="lg" className="rounded-full h-12 text-base px-8">
                Start learning <ArrowRight className="ml-2" />
              </Button>
            </div>
             <p className="mt-8 text-muted-foreground max-w-md mx-auto">
              We don't just give our students only lecture but real life experience.
            </p>
          </div>
          <div className="absolute top-1/2 left-24 hidden lg:block">
            <Image src={heroImage1} alt="Happy student" width={200} height={250} className="rounded-2xl" data-ai-hint="happy student"/>
          </div>
           <div className="absolute top-1/2 right-24 hidden lg:block">
            <Image src={heroImage2} alt="Happy student" width={200} height={250} className="rounded-2xl" data-ai-hint="happy student"/>
          </div>
        </section>

        <section className="py-12 bg-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                <div className="flex items-center gap-4">
                    <div className="bg-red-500 p-3 rounded-lg"><BookOpen className="h-6 w-6"/></div>
                    <div>
                        <p className="text-2xl font-bold">50+</p>
                        <p className="text-sm opacity-80">Total Courses</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <div className="bg-yellow-500 p-3 rounded-lg"><Users className="h-6 w-6"/></div>
                    <div>
                        <p className="text-2xl font-bold">12K+</p>
                        <p className="text-sm opacity-80">Total Students</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <div className="bg-green-500 p-3 rounded-lg"><CheckSquare className="h-6 w-6"/></div>
                    <div>
                        <p className="text-2xl font-bold">70+</p>
                        <p className="text-sm opacity-80">Total Videos</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-4xl font-bold font-headline text-foreground max-w-sm">Smart and clever kids ready to fly high!</h3>
                <Button variant="outline" asChild className="rounded-full">
                    <Link href="/courses">Learn More <ArrowRight className="ml-2" /></Link>
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <CourseCard imageSrc={PlaceHolderImages.find(p => p.id === 'course-1')?.imageUrl} title="Life Skills For Kids" color="bg-[#FF9A76]" />
              <CourseCard imageSrc={PlaceHolderImages.find(p => p.id === 'course-2')?.imageUrl} title="Imagination is power" color="bg-[#6AAB9C]" />
              <CourseCard imageSrc={PlaceHolderImages.find(p => p.id === 'course-3')?.imageUrl} title="Grow your own wings" color="bg-[#55828B]" />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 text-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-muted-foreground font-medium">We have an important lesson at this time</p>
                <h3 className="text-4xl font-bold font-headline text-foreground mt-2">Shaping the future of kids</h3>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <CategoryCard icon={<Sun />} title="Letter Identification" subtitle="Class - Pre School" color="bg-blue-100" iconColor="text-blue-500" />
                    <CategoryCard icon={<BookOpen />} title="General Knowledge" subtitle="Fourth Grade" color="bg-red-100" iconColor="text-red-500"/>
                    <CategoryCard icon={<Star />} title="Geography Quiz" subtitle="First Grade" color="bg-green-100" iconColor="text-green-500"/>
                    <CategoryCard icon={<Heart />} title="Visual Arts Training" subtitle="Coaching class" color="bg-yellow-100" iconColor="text-yellow-500"/>
                </div>
            </div>
        </section>

        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                <div className="grid grid-cols-1 gap-8">
                    <div className="bg-yellow-300 rounded-2xl p-8">
                        <h4 className="text-3xl font-bold font-headline text-yellow-800">Confidence that builds a brighter future.</h4>
                        <p className="mt-2 text-yellow-700">We care about your child's future, we are the best choice.</p>
                        <Button variant="outline" className="mt-6 rounded-full bg-white text-yellow-800 border-yellow-800">Learn More</Button>
                    </div>
                     <div className="bg-red-200 rounded-2xl p-8">
                        <h4 className="text-3xl font-bold font-headline text-red-800">Helping kids to shoot their dreams.</h4>
                        <p className="mt-2 text-red-700">We are a team of professionals who are passionate about education.</p>
                        <Button variant="outline" className="mt-6 rounded-full bg-white text-red-800 border-red-800">Learn More</Button>
                    </div>
                </div>
                 <div className="relative h-[500px]">
                    <Image src={confidenceImage} alt="Confident kid" fill className="object-cover rounded-2xl" data-ai-hint="confident child"/>
                </div>
            </div>
        </section>

         <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image src={empowerImage} alt="Smart kid" fill className="object-cover" data-ai-hint="smart child"/>
            </div>
            <div>
              <p className="font-semibold text-primary">Join our community</p>
              <h3 className="text-4xl font-bold font-headline text-foreground mt-2">Empower your kids to think be smarter and sharper</h3>
              <p className="mt-4 text-muted-foreground">
                We design our curriculum to be engaging and effective. Our teachers are passionate about helping children learn and grow.
              </p>
              <div className="mt-6 flex gap-8">
                  <div>
                      <p className="text-3xl font-bold text-green-500">45M+</p>
                      <p className="text-muted-foreground">Active students on our platform</p>
                  </div>
                   <div>
                      <p className="text-3xl font-bold text-blue-500">164+</p>
                      <p className="text-muted-foreground">Awesome review from parents</p>
                  </div>
              </div>
              <Button className="mt-8 rounded-full h-12 text-base px-8">Get Started</Button>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-yellow-300 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                        <Image src={buildingImage} alt="Kids learning" fill className="object-cover" data-ai-hint="children learning"/>
                    </div>
                    <div>
                        <p className="font-semibold text-yellow-800">Learning Path</p>
                        <h3 className="text-4xl font-bold font-headline text-yellow-900 mt-2">Building children one at a time</h3>
                        <p className="mt-4 text-yellow-800">We believe in a personalized approach to education, where every child's unique potential is nurtured.</p>
                        <div className="mt-4 flex items-center gap-4 text-yellow-900">
                           <div className="flex items-center gap-2">
                                <Check className="h-5 w-5"/>
                                <span>Get a certificate</span>
                           </div>
                             <div className="flex items-center gap-2">
                                <Check className="h-5 w-5"/>
                                <span>Offline & Online Class</span>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>

      <footer className="bg-card text-card-foreground pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                <div>
                    <h4 className="font-bold font-headline mb-4">For Pre-School</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary">For Kindergarten</Link></li>
                        <li><Link href="#" className="hover:text-primary">For School</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold font-headline mb-4">About us</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary">Career</Link></li>
                        <li><Link href="#" className="hover:text-primary">Press & Media</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold font-headline mb-4">Profile</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary">Update live</Link></li>
                        <li><Link href="#" className="hover:text-primary">Subscription</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold font-headline mb-4">Contact</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary">FAQs</Link></li>
                        <li><Link href="#" className="hover:text-primary">Help</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold font-headline mb-4">In a rush?</h4>
                     <p className="text-sm text-muted-foreground">We're on Instagram and Twitter</p>
                </div>
            </div>
          <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
             <div className="flex items-center gap-2">
                <BookOpen className="h-7 w-7 text-primary" />
                <h2 className="text-xl font-bold font-headline">Edukids</h2>
            </div>
            <p className="text-muted-foreground mt-4 md:mt-0">&copy; {new Date().getFullYear()} Edukids. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CourseCard({ imageSrc, title, color }: { imageSrc?: string; title: string; color: string }) {
  return (
    <div className={`${color} rounded-2xl p-6`}>
        {imageSrc && (
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image src={imageSrc} alt={title} fill className="object-cover" />
            </div>
        )}
        <h4 className="text-xl font-bold font-headline text-white">{title}</h4>
    </div>
  )
}

function CategoryCard({ icon, title, subtitle, color, iconColor }: { icon: React.ReactNode; title:string; subtitle: string; color: string; iconColor: string; }) {
    return (
        <div className="flex flex-col items-center">
            <div className={`p-4 rounded-full ${color}`}>
                <div className={`h-8 w-8 ${iconColor}`}>{icon}</div>
            </div>
            <p className="mt-4 font-semibold text-foreground">{title}</p>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
    )
}

    