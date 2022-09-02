import React from 'react';

interface IWrapper {
  children: React.ReactNode;
  width?: 'narrow' | 'narrower' | 'normal';
}
const Wrapper = ({ children, width = 'normal' }: IWrapper) => {
  const setWidth = {
    narrow: 'max-w-3xl',
    narrower: 'max-w-5xl',
    normal: 'max-w-7xl',
  };

  return (
    <div className={`mx-auto h-full  ${setWidth[width]} px-4`}>
      <div className="h-full w-full">{children}</div>
    </div>
  );
};
export default Wrapper;
