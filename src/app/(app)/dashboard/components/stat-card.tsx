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
    <Card className="p-4" style={{ backgroundColor: color }}>
      <CardContent className="flex items-center gap-4 p-0">
        <div
          className="p-3 rounded-lg bg-white/20"
        >
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="text-2xl font-bold text-white">{value}</div>
          <div className="text-white/80">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}
