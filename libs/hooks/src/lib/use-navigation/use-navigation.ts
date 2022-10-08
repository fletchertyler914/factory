import {
  CogIcon,
  HomeIcon,
  FolderIcon,
  Square3Stack3DIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { useState, useMemo } from 'react';

export interface UseNavigation {
  navigation: NavigationItem[];
}

export interface NavigationItem {
  name: string;
  href: string;
  query?: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  current: boolean;
}

const defaultNavigation: NavigationItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: HomeIcon,
    current: true,
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: FolderIcon,
    current: false,
  },
  {
    name: 'Collections',
    href: '/collections',
    icon: Square3Stack3DIcon,
    current: false,
  },
  {
    name: 'Attributes',
    href: '/attributes',
    icon: SquaresPlusIcon,
    current: false,
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: CogIcon,
    current: false,
  },
];

export function useNavigation(): UseNavigation {
  const [navigation, setNavigation] =
    useState<NavigationItem[]>(defaultNavigation);
  const { route } = useRouter();

  useMemo(() => {
    if (route) {
      const updatedNavigation = [...defaultNavigation];

      // Update the current active route
      updatedNavigation.forEach((item) => {
        item.current = item.href === route;
      });

      // Update the navigation state
      setNavigation(updatedNavigation);
    }
  }, [route]);

  return { navigation };
}

export default useNavigation;
