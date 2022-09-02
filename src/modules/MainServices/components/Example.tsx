import Image from 'next/image';
import React from 'react';

import close from '@/public/assets/close.svg';
import tick from '@/public/assets/tick.svg';

interface ITableExample {
  isOk: boolean;
  title: string;
  content: string;
}
const TableExample = ({ title, content, isOk }: ITableExample) => {
  return (
    <div className="space-y-3">
      {/* <div className="h-12 w-12 bg-slate-300"></div> */}
      {isOk ? (
        <Image src={tick} height={56} width={56} alt="Checkmark icon" />
      ) : (
        <Image src={close} height={56} width={56} alt="Checkmark icon" />
      )}
      <p className="font-bold text-theme-primary">{title}</p>
      <p className="">{content}</p>
    </div>
  );
};
export default TableExample;
