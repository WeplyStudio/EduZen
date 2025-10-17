'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type CourseCardProps = {
  id: string;
  title: string;
  imageUrl?: string;
  imageHint?: string;
  color?: string;
};

export function CourseCard({ title, imageUrl, imageHint, color }: CourseCardProps) {
  return (
    <div
      className={cn("rounded-2xl p-6 flex flex-col justify-between min-h-[250px]", color)}
    >
        {imageUrl && (
            <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
            <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                data-ai-hint={imageHint}
            />
            </div>
        )}
      <h4 className="text-xl font-bold font-headline text-white">{title}</h4>
      <Button
        variant="ghost"
        className="justify-start p-0 h-auto text-white hover:text-white/80 mt-4"
      >
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
