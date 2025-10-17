'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type StatCardProps = {
  value: string;
  label: string;
  icon: React.ElementType;
  color: string;
};

export function StatCard({ value, label, icon: Icon, color }: StatCardProps) {
  return (
    <Card className="p-4 bg-card shadow-sm">
      <CardContent className="flex items-center gap-4 p-0">
        <div
          className="p-3 rounded-lg"
          style={{ backgroundColor: `${color}1A`}} // 1A is hex for 10% opacity
        >
          <Icon className="h-6 w-6" style={{ color: color }} />
        </div>
        <div>
          <div className="text-2xl font-bold text-foreground">{value}</div>
          <div className="text-muted-foreground">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}
