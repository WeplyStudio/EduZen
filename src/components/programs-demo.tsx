import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Baby, ToyBrick, School, GraduationCap } from "lucide-react";

const programs = [
  {
    icon: <Baby className="h-8 w-8 text-primary" />,
    title: "Playground",
    description: "A fun and safe start to learning and socialization.",
  },
  {
    icon: <ToyBrick className="h-8 w-8 text-primary" />,
    title: "Kindergarten (TK)",
    description: "Building foundational skills for literacy and numeracy with joy.",
  },
  {
    icon: <School className="h-8 w-8 text-primary" />,
    title: "Elementary (SD)",
    description: "Developing core knowledge, critical thinking, and creativity.",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Junior High (SMP)",
    description: "Preparing for higher education and future success.",
  },
];


function ProgramCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <Card className="p-6 text-center flex flex-col items-center shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
                {icon}
            </div>
            <CardTitle className="text-xl font-bold font-headline mb-2">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </Card>
    )
}

export default function ProgramsDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {programs.map(program => (
            <ProgramCard key={program.title} {...program} />
        ))}
    </div>
  );
}
