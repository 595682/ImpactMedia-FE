import { ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';

interface IBreadcrumbs {
  title: string | null;
}

const Breadcrumbs = ({ title }: IBreadcrumbs) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="mb-4 flex items-center space-x-4">
        <li>
          <div className="flex items-center">
            <Link href={'/blog'} passHref scroll={false}>
              <a
                className=" text-base font-medium text-white hover:text-theme-secondary"
                aria-current={'page'}
              >
                Blog
              </a>
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon
              className="h-5 w-5 shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <span className="ml-4 text-sm text-white" aria-current={'page'}>
              {title}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};
export default Breadcrumbs;
