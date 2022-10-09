import { CubeTransparentIcon } from '@heroicons/react/24/outline';
import NavLinks from '../nav-links/nav-links';

/* eslint-disable-next-line */
export interface SideBarProps {}

export function SideBar(props: SideBarProps) {
  return (
    <div className="hidden w-28 overflow-y-auto bg-indigo-700 md:block">
      <div className="flex w-full flex-col items-center py-4">
        <div className="flex flex-shrink-0 items-center text-white">
          <CubeTransparentIcon className="h-8 w-8 text-white mr-1" /> Factory
        </div>
        <div className="mt-6 w-full flex-1 space-y-1 px-2">
          <NavLinks />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
