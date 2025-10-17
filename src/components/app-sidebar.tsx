'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  useSidebar,
} from '@/components/ui/sidebar';
import { BookOpen, FlaskConical, LayoutDashboard, ListTodo, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/tasks', icon: ListTodo, label: 'Tasks' },
  { href: '/workspace', icon: Users, label: 'Workspace' },
  { href: '/research', icon: FlaskConical, label: 'Research' },
  { href: '/courses', icon: BookOpen, label: 'Courses' },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();
  const userAvatar = PlaceHolderImages.find((img) => img.id === 'user-3')?.imageUrl || '';

  // For app-like navigation, it's better to match the base path.
  const isActive = (href: string) => {
    if (href === '/dashboard') return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
      className="group-data-[variant=sidebar]:bg-sidebar group-data-[variant=sidebar]:text-sidebar-foreground"
    >
      <SidebarContent className="flex flex-col justify-between">
        <div>
          <SidebarHeader className="h-20 flex items-center justify-center">
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-sidebar-primary" />
              <span className={cn("font-bold text-2xl font-headline", state === 'collapsed' && "hidden")}>Edukids</span>
            </Link>
          </SidebarHeader>

          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <Link href={item.href} passHref legacyBehavior>
                  <SidebarMenuButton
                    isActive={isActive(item.href)}
                    tooltip={{ children: item.label }}
                    asChild
                  >
                    <a>
                      <item.icon />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
