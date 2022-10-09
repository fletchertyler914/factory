import { useNavigation } from '@factory/hooks';
import { classNames } from '@factory/util';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface NavLinksProps {}

export function NavLinks(props: NavLinksProps) {
  const { navigation } = useNavigation();

  return (
    <>
      {navigation.map((item) => (
        <Link key={item.name} href={item.href} passHref>
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? 'bg-indigo-800 text-white'
                : 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
              'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            <item.icon
              className={classNames(
                item.current
                  ? 'text-white'
                  : 'text-indigo-300 group-hover:text-white',
                'h-6 w-6'
              )}
              aria-hidden="true"
            />
            <span className="mt-2">{item.name}</span>
          </a>
        </Link>
      ))}
    </>
  );
}

export default NavLinks;
