import { PlaceHolderImages } from './placeholder-images';

export type Task = {
  id: string;
  title: string;
  dueDate: Date;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Todo' | 'In Progress' | 'Done';
};

export const tasks: Task[] = [
  {
    id: 'TASK-8782',
    title: 'Finish Math Assignment 3',
    status: 'In Progress',
    priority: 'High',
    dueDate: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
  },
  {
    id: 'TASK-7878',
    title: 'Prepare for History Midterm Exam',
    status: 'Todo',
    priority: 'High',
    dueDate: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
  },
  {
    id: 'TASK-4587',
    title: 'Write essay on "The Great Gatsby"',
    status: 'Todo',
    priority: 'Medium',
    dueDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
  },
  {
    id: 'TASK-3214',
    title: 'Complete Biology Lab Report',
    status: 'Done',
    priority: 'Medium',
    dueDate: new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
  },
  {
    id: 'TASK-9875',
    title: 'Start research for Physics project',
    status: 'Todo',
    priority: 'Low',
    dueDate: new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000), // 2 weeks from now
  },
  {
    id: 'TASK-1245',
    title: 'Read chapter 5 of Chemistry textbook',
    status: 'In Progress',
    priority: 'Low',
    dueDate: new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000), // 4 days from now
  },
];

export type Message = {
  id: string;
  user: {
    name: string;
    avatarUrl: string;
  };
  text: string;
  timestamp: string;
};

export const messages: Message[] = [
  {
    id: '1',
    user: {
      name: 'Alice',
      avatarUrl:
        PlaceHolderImages.find((img) => img.id === 'user-1')?.imageUrl || '',
    },
    text: "Hey everyone, I've created the initial project proposal document. You can find it in the shared resources folder. Let me know your thoughts!",
    timestamp: '10:30 AM',
  },
  {
    id: '2',
    user: {
      name: 'Bob',
      avatarUrl:
        PlaceHolderImages.find((img) => img.id === 'user-2')?.imageUrl || '',
    },
    text: "Awesome, thanks Alice! I'll take a look this afternoon. I also found a great article on our topic, I'll upload it.",
    timestamp: '10:32 AM',
  },
  {
    id: '3',
    user: {
      name: 'You',
      avatarUrl:
        PlaceHolderImages.find((img) => img.id === 'user-3')?.imageUrl || '',
    },
    text: "Perfect. I can start working on the presentation slides based on the proposal. Let's aim to have a draft by Friday.",
    timestamp: '10:35 AM',
  },
  {
    id: '4',
    user: {
      name: 'Charlie',
      avatarUrl:
        PlaceHolderImages.find((img) => img.id === 'user-4')?.imageUrl || '',
    },
    text: 'Sounds good. I can help with the slide design. I have some templates we can use.',
    timestamp: '11:00 AM',
  },
  {
    id: '5',
    user: {
      name: 'Alice',
      avatarUrl:
        PlaceHolderImages.find((img) => img.id === 'user-1')?.imageUrl || '',
    },
    text: 'Great idea, Charlie! That would be a huge help.',
    timestamp: '11:02 AM',
  },
];

export const stats = [
  {
    value: '50+',
    label: 'Total Courses',
    icon: 'academic-cap',
    color: '#FF6B6B',
  },
  {
    value: '12k+',
    label: 'Total Students',
    icon: 'users',
    color: '#4ECDC4',
  },
  {
    value: '70+',
    label: 'Total Videos',
    icon: 'video',
    color: '#45B7D1',
  },
];

export const courses = [
  {
    id: '1',
    title: 'Life Skills For Kids',
    imageUrl: PlaceHolderImages.find(img => img.id === 'course-1')?.imageUrl,
    imageHint: 'kids learning',
    color: '#FF9A76',
  },
  {
    id: '2',
    title: 'Imagination is power',
    imageUrl: PlaceHolderImages.find(img => img.id === 'course-2')?.imageUrl,
    imageHint: 'child thinking',
    color: '#6AAB9C',
  },
  {
    id: '3',
    title: 'Grow your own wings',
    imageUrl: PlaceHolderImages.find(img => img.id === 'course-3')?.imageUrl,
    imageHint: 'child flying',
    color: '#55828B',
  },
  {
    id: '4',
    title: 'Advanced Mathematics',
    imageUrl: PlaceHolderImages.find(img => img.id === 'course-4')?.imageUrl,
    imageHint: 'math equations',
    color: '#EF476F',
  },
  {
    id: '5',
    title: 'Introduction to Physics',
    imageUrl: PlaceHolderImages.find(img => img.id === 'course-5')?.imageUrl,
    imageHint: 'physics experiment',
    color: '#FF9F1C',
  },
  {
    id: '6',
    title: 'Creative Writing Workshop',
    imageUrl: PlaceHolderImages.find(img => img.id === 'course-6')?.imageUrl,
    imageHint: 'writing hand',
    color: '#0CB0A9',
  },
];
