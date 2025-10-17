'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type Course = {
  id: string;
  title: string;
  imageUrl?: string;
  imageHint?: string;
  color?: string;
};

type CourseStackProps = {
  items: Course[];
  offset?: number;
  scaleFactor?: number;
};

export function CourseStack({
  items,
  offset = 12,
  scaleFactor = 0.05,
}: CourseStackProps) {
  const [cards, setCards] = useState(items);

  useEffect(() => {
    // Start with the initial items
    setCards(items);
  }, [items]);

  const handleCardClick = (id: string) => {
    setCards((prevCards) => {
      const cardToMove = prevCards.find((card) => card.id === id);
      if (!cardToMove) return prevCards;

      const remainingCards = prevCards.filter((card) => card.id !== id);
      const newStack = [...remainingCards, cardToMove];
      return newStack;
    });
  };

  return (
    <div className="relative h-80 w-full md:h-96">
      {cards.map((card, index) => {
        const isTopCard = index === cards.length - 1;
        return (
          <div
            key={card.id}
            className="absolute transition-all duration-300 ease-in-out"
            style={{
              transform: `scale(${1 - (cards.length - 1 - index) * scaleFactor}) translateY(-${(cards.length - 1 - index) * offset}px)`,
              zIndex: index,
              top: 0,
              left: '50%',
              marginLeft: `-${Math.min(300, typeof window !== 'undefined' ? window.innerWidth / 2 - 40 : 150)}px`,
              width: `${Math.min(600, typeof window !== 'undefined' ? window.innerWidth - 80 : 520)}px`
            }}
          >
             <div
                className={cn(
                  "rounded-2xl p-6 flex flex-col justify-between min-h-[280px] md:min-h-[320px] cursor-pointer bg-card shadow-lg",
                  isTopCard ? "cursor-default" : "hover:translate-y-[-4px]",
                  "transition-transform"
                )}
                onClick={() => !isTopCard && handleCardClick(card.id)}
            >
                <div className="flex justify-between items-start">
                    <h4 className="text-xl md:text-2xl font-bold font-headline text-foreground max-w-[70%]">{card.title}</h4>
                    {card.imageUrl && (
                        <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-lg overflow-hidden">
                        <Image
                            src={card.imageUrl}
                            alt={card.title}
                            fill
                            className="object-cover"
                            data-ai-hint={card.imageHint}
                        />
                        </div>
                    )}
                </div>
                {isTopCard && (
                    <Button
                        variant="default"
                        className="rounded-full w-fit"
                    >
                        Continue Learning <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
