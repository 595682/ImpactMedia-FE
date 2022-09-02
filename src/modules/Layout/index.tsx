import PreviewMode from '@/common/components/PreviewMode';

import Footer from './components/Footer';
import Header from './components/Header';

interface ILayoutModule {
  children: React.ReactNode;
  fullFooter?: boolean;
  lightMenu?: boolean;
  noMap?: boolean;
  previewMode?: boolean;
}
const LayoutModule = ({
  children,
  fullFooter = false,
  lightMenu = false,
  noMap = false,
  previewMode = false,
}: ILayoutModule) => {
  return (
    <div className="flex min-h-[100vh] flex-col">
      <Header menuMode={lightMenu ? 'light' : 'dark'} />
      {/* <FloatingHeader /> */}
      <div className="flex-1">
        {previewMode && <PreviewMode />}
        {children}
      </div>
      <Footer fullFooter={fullFooter} noMap={noMap} />
    </div>
  );
};
export default LayoutModule;
