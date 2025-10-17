"use client";

import { Baby, GraduationCap, School, ToyBrick } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function ProgramsDemo() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <GridItem
        icon={<Baby className="h-8 w-8 text-foreground" />}
        title="Playground"
        description="A fun and safe environment for our youngest learners to explore, play, and begin their educational journey."
      />

      <GridItem
        icon={<ToyBrick className="h-8 w-8 text-foreground" />}
        title="Kindergarten (TK)"
        description="Building foundational skills in literacy, numeracy, and social interaction through joyful, engaging activities."
      />

      <GridItem
        icon={<School className="h-8 w-8 text-foreground" />}
        title="Elementary (SD)"
        description="Developing core knowledge, critical thinking, and creativity within the internationally recognized Cambridge curriculum."
      />

      <GridItem
        icon={<GraduationCap className="h-8 w-8 text-foreground" />}
        title="Junior High (SMP)"
        description="Preparing students for higher education and future success with a focus on academic rigor and leadership skills."
      />
    </ul>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 bg-card">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-border p-3 bg-background">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-headline text-xl/[1.375rem] font-semibold text-balance text-foreground md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <h2 className="font-body text-sm/[1.125rem] text-muted-foreground md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};