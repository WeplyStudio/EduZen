
'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, CheckSquare, GraduationCap, Building, Star, Heart, MessageCircle, Users, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import FeaturesSectionDemo from '@/components/ui/features-section-demo-3';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProgramsDemo from '@/components/programs-demo';

function FeatureCard({ icon, title, subtitle }: { icon: React.ReactNode; title:string; subtitle: string;}) {
    return (
        <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card shadow-sm h-full">
            <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                {icon}
            </div>
            <h4 className="font-semibold text-lg text-foreground">{title}</h4>
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        </div>
    )
}

function TestimonialCard({ name, role, avatar, children }: { name: string; role: string; avatar: string; children: React.ReactNode; }) {
  return (
    <div className="bg-card p-6 rounded-2xl shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image src={avatar} alt={name} fill className="object-cover" data-ai-hint="person portrait" />
        </div>
        <div>
          <p className="font-bold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <p className="text-muted-foreground text-sm">{children}</p>
    </div>
  );
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const heroImage1 =
    PlaceHolderImages.find((img) => img.id === 'hero-1')?.imageUrl || '';
  const heroImage2 =
    PlaceHolderImages.find((img) => img.id === 'hero-2')?.imageUrl || '';
  const aboutImage =
    PlaceHolderImages.find((img) => img.id === 'building-1')?.imageUrl || '';
  const ctaImage =
    PlaceHolderImages.find((img) => img.id === 'empower-1')?.imageUrl || '';
  const user1Avatar =
    PlaceHolderImages.find((img) => img.id === 'user-1')?.imageUrl || '';
  const user2Avatar =
    PlaceHolderImages.find((img) => img.id === 'user-2')?.imageUrl || '';

  const navItems = [
      { href: "#about", label: "About Us" },
      { href: "#programs", label: "Programs" },
      { href: "#features", label: "Why Us" },
  ]

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[85%] z-50">
        <div className="mx-auto flex h-16 w-full items-center justify-between rounded-full bg-card/80 px-6 backdrop-blur-sm shadow-md border border-border/50">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-7 w-7 text-primary" />
            <h1 className="text-xl font-bold font-headline">Kinarya Grasia</h1>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)} className="rounded-full">
              {menuOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
        </div>
         <AnimatePresence>
          {menuOpen && (
              <motion.div 
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-20 left-0 w-full bg-card/90 backdrop-blur-sm rounded-2xl shadow-lg border border-border/50 overflow-hidden"
              >
                  <div className="flex flex-col items-center p-4 gap-2">
                      {navItems.map(item => (
                          <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="text-base font-medium hover:bg-primary/10 rounded-full w-full text-center py-2 transition-colors">
                              {item.label}
                          </Link>
                      ))}
                  </div>
              </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <section className="relative pt-32 pb-24 px-4">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-black/[0.05] dark:bg-grid-white/[0.05]">
                <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-5xl sm:text-6xl font-extrabold font-headline tracking-tight">
                            Nurturing Future Leaders with the Cambridge Curriculum
                        </h2>
                        <p className="mt-6 text-muted-foreground text-lg max-w-xl">
                            Since 2009, Kinarya Grasia provides exceptional education from Playground to Junior High, preparing students for global success.
                        </p>
                        <div className="mt-8">
                            <Button size="lg" className="rounded-full h-12 text-base px-8" asChild>
                                <Link href="/dashboard">
                                    Enroll Now <ArrowRight className="ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
                            <Image
                                src={heroImage1}
                                alt="Happy student"
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint="happy student"
                            />
                        </div>
                        <div className="space-y-4">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src={heroImage2}
                                    alt="Student learning"
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    data-ai-hint="student learning"
                                />
                            </div>
                            <div className="bg-card p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center">
                                <Star className="h-8 w-8 text-primary mb-2"/>
                                <p className="text-2xl font-bold font-headline">15+</p>
                                <p className="text-sm text-muted-foreground">Years of Excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="about" className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                    <Image src={aboutImage} alt="Kinarya Grasia School" fill className="object-cover" data-ai-hint="modern school building"/>
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <h3 className="text-4xl font-bold font-headline text-foreground">Our Programs</h3>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">We offer a comprehensive educational journey for every stage of your child's development.</p>
            <div className="mt-12">
                <ProgramsDemo />
            </div>
          </div>
        </section>
        
        <FeaturesSectionDemo />

        <section id="features" className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h3 className="text-4xl font-bold font-headline text-foreground">Why Choose Kinarya Grasia?</h3>
                  <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">We provide a holistic educational experience that sets our students apart.</p>
                </div>
                 <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard icon={<GraduationCap className="h-8 w-8" />} title="Cambridge Curriculum" subtitle="An internationally recognized program that opens doors to the world's best universities."/>
                    <FeatureCard icon={<Star className="h-8 w-8" />} title="Experienced Educators" subtitle="Our passionate and certified teachers are dedicated to each student's success."/>
                    <FeatureCard icon={<Building className="h-8 w-8" />} title="Modern Facilities" subtitle="State-of-the-art classrooms, labs, and sports facilities that enhance learning."/>
                </div>
            </div>
        </section>

        <section className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                  <h3 className="text-4xl font-bold font-headline text-foreground">What Our Community Says</h3>
                  <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Hear from parents and students who are part of the Kinarya Grasia family.</p>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <TestimonialCard name="Sarah L." role="Parent of 3rd Grader" avatar={user1Avatar}>
                    "Kinarya Grasia has been a transformative experience for our daughter. The Cambridge curriculum is challenging yet engaging, and the teachers are incredibly supportive. We've seen her confidence and love for learning grow exponentially."
                  </TestimonialCard>
                  <TestimonialCard name="Michael B." role="Parent of 8th Grader" avatar={user2Avatar}>
                    "The school's focus on critical thinking and leadership skills is outstanding. Our son is not just memorizing facts; he's learning how to think, problem-solve, and collaborate. We couldn't be happier with our choice."
                  </TestimonialCard>
              </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold font-headline text-foreground">Ready to Join Us?</h3>
                <p className="mt-4 text-muted-foreground">
                  Take the first step towards providing your child with an exceptional education. Explore our admissions process or get in touch with our team to learn more.
                </p>
                <div className="mt-6 flex gap-4">
                  <Button size="lg">Admissions</Button>
                  <Button size="lg" variant="outline">Contact Us</Button>
                </div>
              </div>
              <div className="relative h-64 md:h-full">
                <Image src={ctaImage} alt="Happy student" fill className="object-cover" data-ai-hint="happy student" />
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-sidebar text-sidebar-foreground pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="col-span-2 md:col-span-1">
                     <div className="flex items-center gap-2 mb-4">
                        <GraduationCap className="h-8 w-8 text-primary" />
                        <h2 className="text-xl font-bold font-headline text-white">Kinarya Grasia</h2>
                    </div>
                    <p className="text-sm text-muted-foreground">Nurturing Future Leaders Since 2009.</p>
                </div>
                <div>
                    <h4 className="font-bold font-headline mb-4 text-white">Programs</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary transition-colors">Playground</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Kindergarten</Link>_</li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Elementary</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Junior High</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold font-headline mb-4 text-white">About Us</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary transition-colors">Our History</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Our Mission</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold font-headline mb-4 text-white">Resources</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary transition-colors">Admissions</Link></li>
                        <li><Link href="/dashboard" className="hover:text-primary transition-colors">Student Portal</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">FAQs</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold font-headline mb-4 text-white">Contact</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-primary transition-colors">info@kinaryagrasia.sch.id</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">+62 123 4567 890</Link></li>
                    </ul>
                </div>
            </div>
          <div className="mt-12 border-t border-sidebar-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Kinarya Grasia. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
