import { classNames } from '@factory/util';
import { Menu, Transition } from '@headlessui/react';
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Fragment } from 'react';

export interface ToolBarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function ToolBar({ mobileMenuOpen, setMobileMenuOpen }: ToolBarProps) {
  const { connected, disconnect } = useWallet();

  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Sign out', action: disconnect },
  ];

  const addButtonActions = [
    { name: 'New Project', action: () => console.log('New Project Clicked!') },
    {
      name: 'New Collection',
      action: () => console.log('New Collection Clicked!'),
    },
    {
      name: 'New Attribute',
      action: () => console.log('New Attribute Clicked!'),
    },
  ];

  return (
    <header className="w-full">
      <div className="relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white dark:bg-gray-800 shadow-sm">
        <button
          type="button"
          className="border-r border-gray-200 px-4 text-gray-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        <div className="flex flex-1 justify-between px-4 sm:px-6">
          {/* Search Bar */}
          <div className="flex flex-1">
            <form className="flex w-full md:ml-0" action="#" method="GET">
              <label htmlFor="search-field" className="sr-only">
                Search all projects, collections, attributes, and more.
              </label>
              <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center ">
                  <MagnifyingGlassIcon
                    className="h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                </div>
                <input
                  name="search-field"
                  id="search-field"
                  className="h-full w-full dark:bg-transparent border-transparent py-2 pl-8 pr-3 text-base text-gray-900 dark:text-white placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </form>
          </div>

          {/* Icons Container */}
          <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
            {/* Profile dropdown */}
            <Menu as="div" className="relative flex-shrink-0">
              <div>
                {!connected ? (
                  <WalletMultiButton className="scale-55 md:scale-75 font-medium bg-gray-900" />
                ) : (
                  <Menu.Button className="flex rounded-full bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                )}
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) =>
                        item.action ? (
                          <button
                            onClick={() => item.action()}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'flex items-start px-4 py-2 text-sm text-gray-700 cursor-pointer w-full'
                            )}
                          >
                            {item.name}
                          </button>
                        ) : (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            {item.name}
                          </a>
                        )
                      }
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>

            {/* Add new dropdown */}
            <Menu as="div" className="relative flex-shrink-0">
              <div>
                <Menu.Button className="flex items-center justify-center rounded-full bg-indigo-600 p-1 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <PlusIcon className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Add file</span>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {addButtonActions.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <button
                          onClick={() => item.action()}
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'flex items-start px-4 py-2 text-sm text-gray-700 cursor-pointer w-full'
                          )}
                        >
                          {item.name}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ToolBar;
