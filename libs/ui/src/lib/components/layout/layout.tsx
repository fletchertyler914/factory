import { useMobileMenu } from '@factory/hooks';
import MobileMenu from '../mobile-menu/mobile-menu';
import SideBar from '../side-bar/side-bar';
import ToolBar from '../tool-bar/tool-bar';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();

  return (
    <div className="flex h-full">
      <SideBar />

      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <ToolBar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={(open) => setMobileMenuOpen(open)}
        />
        {/* Main content */}
        <div className="flex flex-1 items-stretch overflow-hidden">
          <main className="flex-1 overflow-y-auto">
            {/* Page container */}
            <section
              aria-labelledby="primary-heading"
              className="flex h-full min-w-0 flex-1 flex-col lg:order-last text-black dark:text-white"
            >
              {/* Page */}
              {children}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
