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
  offset = 10,
  scaleFactor = 0.06,
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
    <div className="relative h-64 w-full md:h-80">
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
                  "rounded-2xl p-6 flex flex-col justify-between min-h-[250px] md:min-h-[300px] cursor-pointer",
                  isTopCard && "cursor-default"
                )}
                style={{ backgroundColor: card.color ? card.color : 'transparent' }}
                onClick={() => !isTopCard && handleCardClick(card.id)}
            >
                <div className="flex justify-between items-start">
                    <h4 className="text-xl md:text-2xl font-bold font-headline text-white max-w-[70%]">{card.title}</h4>
                    {card.imageUrl && (
                        <div className="relative h-20 w-20 md:h-24 md:w-24">
                        <Image
                            src={card.imageUrl}
                            alt={card.title}
                            fill
                            className="object-cover rounded-lg"
                            data-ai-hint={card.imageHint}
                        />
                        </div>
                    )}
                </div>
                {isTopCard && (
                    <Button
                        variant="ghost"
                        className="justify-start p-0 h-auto text-white hover:text-white/80 mt-4 w-fit"
                    >
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
