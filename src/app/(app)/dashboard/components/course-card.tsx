'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type CourseCardProps = {
  id: string;
  title: string;
  imageUrl?: string;
  imageHint?: string;
  color?: string; // Not used in this version, but kept for data compatibility
};

export function CourseCard({ title, imageUrl, imageHint }: CourseCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col group shadow-sm">
       {imageUrl && (
            <div className="relative h-40 w-full overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={imageHint}
                />
            </div>
        )}
        <CardHeader>
             <CardTitle className="text-lg font-bold font-headline">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
            {/* Future content can go here */}
        </CardContent>
        <CardFooter>
            <Button
                variant="ghost"
                className="justify-start p-0 h-auto text-primary hover:text-primary/80"
            >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
      </CardFooter>
    </Card>
  );
}
