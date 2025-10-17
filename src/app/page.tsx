
'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, CheckCircle, GraduationCap, Building, Star } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

function FeatureCard({ icon, title, subtitle }: { icon: React.ReactNode; title:string; subtitle: string;}) {
    return (
        <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card shadow-sm">
            <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                {icon}
            </div>
            <h4 className="font-semibold text-lg text-foreground">{title}</h4>
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        </div>
    )
}

export default function LandingPage() {
  const heroImage1 =
    PlaceHolderImages.find((img) => img.id === 'hero-1')?.imageUrl || '';

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-full z-50">
        <div className="mx-auto flex h-16 w-3/4 items-center justify-between rounded-full bg-card/80 px-6 backdrop-blur-sm shadow-md border border-border/50">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-7 w-7 text-primary" />
            <h1 className="text-xl font-bold font-headline">Kinarya Grasia</h1>
          </div>
          <nav className="hidden md:flex items-center gap-1">
              <Link href="#about" className="text-sm font-medium hover:bg-primary/10 rounded-full px-4 py-2 transition-colors">About Us</Link>
              <Link href="#programs" className="text-sm font-medium hover:bg-primary/10 rounded-full px-4 py-2 transition-colors">Programs</Link>
              <Link href="#features" className="text-sm font-medium hover:bg-primary/10 rounded-full px-4 py-2 transition-colors">Why Us</Link>
          </nav>
          <Button asChild className="rounded-full">
            <Link href="/dashboard">
              Student Portal
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative text-center pt-40 pb-32 px-4">
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-headline tracking-tight">
              Nurturing Future Leaders with the Cambridge Curriculum
            </h2>
            <p className="mt-8 text-muted-foreground max-w-2xl mx-auto text-lg">
              Since 2009, Kinarya Grasia has been providing exceptional education for students from Playground and Kindergarten to Elementary and Junior High School.
            </p>
            <div className="mt-8">
              <Button size="lg" className="rounded-full h-12 text-base px-8" asChild>
                <Link href="/dashboard">
                    Enroll Now <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </section>
        
        <section id="about" className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                    <Image src={heroImage1} alt="Kinarya Grasia School" fill className="object-cover" data-ai-hint="modern school building"/>
                </div>
                <div>
                  <p className="font-semibold text-primary">About Our School</p>
                  <h3 className="text-4xl font-bold font-headline text-foreground mt-2">Excellence in Education Since 2009</h3>
                  <p className="mt-4 text-muted-foreground">
                    Kinarya Grasia is dedicated to fostering a supportive and challenging learning environment. We empower students to become critical thinkers, lifelong learners, and compassionate leaders. Our internationally recognized Cambridge curriculum prepares students for global success.
                  </p>
                  <div className="mt-6 flex gap-8">
                      <div>
                          <p className="text-3xl font-bold text-primary">15+</p>
                          <p className="text-muted-foreground">Years of Excellence</p>
                      </div>
                       <div>
                          <p className="text-3xl font-bold text-primary">4 Levels</p>
                          <p className="text-muted-foreground">Playground to SMP</p>
                      </div>
                  </div>
                </div>
            </div>
        </section>

        <section id="programs" className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-4xl font-bold font-headline text-foreground">Our Programs</h3>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">We offer a comprehensive educational journey for every stage of your child's development.</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard icon={<Building className="h-8 w-8"/>} title="Playground" subtitle="A fun and safe start to learning." />
                <FeatureCard icon={<Building className="h-8 w-8"/>} title="Kindergarten (TK)" subtitle="Building foundational skills with joy." />
                <FeatureCard icon={<Building className="h-8 w-8"/>} title="Elementary (SD)" subtitle="Developing core knowledge and creativity." />
                <FeatureCard icon={<Building className="h-8 w-8"/>} title="Junior High (SMP)" subtitle="Preparing for higher education and beyond." />
            </div>
          </div>
        </section>

        <section id="features" className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-4xl font-bold font-headline text-foreground">Why Choose Kinarya Grasia?</h3>
                <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">We provide a holistic educational experience that sets our students apart.</p>
                 <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard icon={<GraduationCap className="h-8 w-8" />} title="Cambridge Curriculum" subtitle="An internationally recognized program that opens doors to the world's best universities."/>
                    <FeatureCard icon={<Star className="h-8 w-8" />} title="Experienced Educators" subtitle="Our passionate and certified teachers are dedicated to each student's success."/>
                    <FeatureCard icon={<Building className="h-8 w-8" />} title="Modern Facilities" subtitle="State-of-the-art classrooms, labs, and sports facilities that enhance learning."/>
                </div>
            </div>
        </section>

      </main>

      <footer className="bg-sidebar text-sidebar-foreground pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                <div>
                    <h4 className="font-bold font-headline mb-4 text-white">Programs</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary">Playground</Link></li>
                        <li><Link href="#" className="hover:text-primary">Kindergarten</Link></li>
                        <li><Link href="#" className="hover:text-primary">Elementary</Link></li>
                        <li><Link href="#" className="hover:text-primary">Junior High</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold font-headline mb-4 text-white">About Us</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary">Our History</Link></li>
                        <li><Link href="#" className="hover:text-primary">Careers</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold font-headline mb-4 text-white">Resources</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary">Admissions</Link></li>
                        <li><Link href="#" className="hover:text-primary">Student Portal</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold font-headline mb-4 text-white">Contact</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary">FAQs</Link></li>
                        <li><Link href="#" className="hover:text-primary">Get in Touch</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold font-headline mb-4 text-white">Connect</h4>
                     <p className="text-sm text-muted-foreground">Follow us on social media.</p>
                </div>
            </div>
          <div className="mt-12 border-t border-sidebar-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
             <div className="flex items-center gap-2">
                <GraduationCap className="h-7 w-7 text-primary" />
                <h2 className="text-xl font-bold font-headline text-white">Kinarya Grasia</h2>
            </div>
            <p className="text-muted-foreground mt-4 md:mt-0">&copy; {new Date().getFullYear()} Kinarya Grasia. All rights reserved.</p>
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
