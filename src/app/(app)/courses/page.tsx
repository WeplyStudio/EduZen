import { AppHeader } from '@/components/app-header';
import { courses } from '@/lib/data';
import { CourseCard } from '../dashboard/components/course-card';

export default function CoursesPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <AppHeader title="Courses" />
      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </main>
    </div>
  );
}
