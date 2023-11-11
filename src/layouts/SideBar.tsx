import { ElementType } from 'react';
import {
  HomeIcon,
  ChartBarIcon,
  UserIcon,
  DocumentTextIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';
import { buttonStyles } from '../components/Button';
import { useSidebarContext } from '../contexts/SideBarContext';
// import { useSidebarContext } from '../contexts/SideBarContext';

const sections = [
  {
    title: 'Dashboard',
    icon: HomeIcon,
    url: '/dashboard',
  },
  {
    title: 'Reports',
    icon: ChartBarIcon,
    url: '/reports',
  },
  {
    title: 'Manage User',
    icon: UserIcon, // Replace with the appropriate icon
    url: '/manage-users',
  },
  {
    title: 'Generate Bill',
    icon: DocumentTextIcon, // Replace with the appropriate icon
    url: '/generate-bill',
  },
  {
    title: 'Profile',
    icon: UserCircleIcon, // Replace with the appropriate icon
    url: '/profile',
  },
];

const Sidebar = () => {
  const { isLargeOpen } = useSidebarContext();
  return (
    <>
      <aside
        className={`sticky top-0 overflow-y-auto 
      scrollbar-hidden pb-4 flex-col ml-1 ${
        isLargeOpen ? 'lg:hidden' : 'lg:flex'
      }`}
      >
        {sections.map((section) => (
          <SmallSidebarItem
            Icon={section.icon}
            title={section.title}
            url={section.url}
          />
        ))}
      </aside>
    </>
  );
};

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: 'ghost' }),
        'py-4 px-1 flex flex-col items-center rounded-lg gap-1'
      )}
    >
      <Icon className='w-6 h-6' />
      <div className='text-sm'>{title}</div>
    </a>
  );
}



export default Sidebar;
