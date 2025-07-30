import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className='min-h-screen bg-background'>
      {/* Navigation */}
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm'>
        <div className='w-full px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-center'>
            {/* Logo/Title */}
            <div className='absolute left-4 sm:left-6 lg:left-8 flex items-center space-x-2'>
              <h1 className='text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent'>
                Figma Replicate Test
              </h1>
            </div>

            {/* Centered Navigation Menu */}
            <NavigationMenu className='mx-auto'>
              <NavigationMenuList className='flex space-x-1 sm:space-x-2'>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to='/'
                      className={cn(
                        'px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none',
                        isActive('/')
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to='/quali'
                      className={cn(
                        'px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none',
                        isActive('/quali')
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      Quali Design System
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='flex-1'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
