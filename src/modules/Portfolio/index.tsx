import { HomeIcon } from '@heroicons/react/solid';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import type { TCategory } from '@/pages/portfolio';
import type { PortfolioElementEntity } from '@/types';

import PortfolioCard from './components/PortfolioCard';

type TTab = {
  name: string;
  href: string;
  category: TCategory;
  hidden?: boolean;
  icon?: any;
}[];

const tabs: TTab = [
  { name: 'Home', icon: HomeIcon, href: '#', category: '' },
  { name: 'Videos', href: '#', category: 'video' },
  {
    name: 'Animated videos',
    href: '#',
    category: 'animated_video',
  },
  { name: 'Live Streams', href: '#', category: 'live_stream' },
  {
    name: 'Events',
    href: '#',
    category: 'event',
  },
  {
    name: 'Branding',
    href: '#',
    category: 'branding',
  },
  {
    name: 'Campaign',
    href: '#',
    category: 'campaign',
  },
];

interface IPortfolioModule {
  category: TCategory;
  display: PortfolioElementEntity[] | [];
  handleSetCategory: (newCategory: TCategory) => void;
}
const PortfolioModule = ({
  display,
  handleSetCategory,
  category,
}: IPortfolioModule) => {
  return (
    <motion.div className="py-20">
      <div>
        <div className="hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
            defaultValue={tabs.find((tab) => tab.category === category)?.name}
          >
            {tabs.map((tab) => (
              <option
                key={tab.category}
                onClick={() => handleSetCategory(tab.category)}
              >
                {tab.name}
              </option>
            ))}
          </select>
        </div>
        <div className="my-10">
          <nav
            className="flex p-4 space-x-4 overflow-y-scroll rounded-lg bg-theme-primary scrollbar-hide"
            aria-label="Tabs"
          >
            {tabs
              .filter((tab) => !tab.hidden)
              .map((tab) => (
                <span
                  key={tab.name}
                  onClick={() => handleSetCategory(tab.category)}
                  className={` whitespace-pre
                    ${
                      tab.category === category
                        ? 'bg-theme-secondary text-gray-800 font-bold'
                        : 'text-white hover:text-theme-secondary-light'
                    }
                    px-3 py-2 text-base rounded-md cursor-pointer`}
                  aria-current={tab.category === category ? 'page' : undefined}
                >
                  {tab.icon ? <tab.icon className="w-6 h-6" /> : tab.name}
                </span>
              ))}
          </nav>
        </div>
      </div>
      <div className="">
        <div className="grid w-full gap-10 rounded-lg sm:grid-cols-2 lg:grid-cols-3">
          <AnimateSharedLayout>
            <AnimatePresence>
              {display.map((portfolioElement) => (
                <motion.div
                  layoutId={portfolioElement.id!}
                  key={portfolioElement.id}
                  initial={{ opacity: 0, scale: 0 }}
                  exit={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="hidden sm:block">
                    <PortfolioCard portfolioElement={portfolioElement} />
                  </div>
                  <div className="block sm:hidden">
                    <PortfolioCard
                      portfolioElement={portfolioElement}
                      forceHover
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </AnimateSharedLayout>
        </div>
      </div>
    </motion.div>
  );
};
export default PortfolioModule;
