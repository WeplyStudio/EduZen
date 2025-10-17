'use client';
import { Card, CardContent } from '@/components/ui/card';

type StatCardProps = {
  value: string;
  label: string;
  icon: React.ElementType;
  color: string;
};

export function StatCard({ value, label, icon: Icon, color }: StatCardProps) {
  return (
    <Card className="bg-white p-6 flex items-center gap-4">
      <div
        className="p-4 rounded-full"
        style={{ backgroundColor: `${color}33` }}
      >
        <Icon className="h-6 w-6" style={{ color }} />
      </div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-muted-foreground">{label}</div>
      </div>
    </Card>
  );
}
