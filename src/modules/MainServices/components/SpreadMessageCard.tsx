import Image from 'next/image';
import React from 'react';

interface ISpreadMessageCard {
  title: string;
  content: string;
  image: any;
}
const SpreadMessageCard = ({ title, content, image }: ISpreadMessageCard) => {
  return (
    <div className="relative ml-10 flex max-w-sm items-center justify-center rounded-xl bg-theme-primary px-8 py-6 text-white">
      <div className="absolute -left-10 my-auto flex h-24 w-24 items-center justify-center rounded-lg bg-theme-secondary">
        <Image src={image} alt={title} />
      </div>
      <div className="pl-12">
        <p className="mb-3 font-semibold uppercase">{title}</p>
        <p className="text-sm font-medium">{content}</p>
      </div>
    </div>
  );
};
export default SpreadMessageCard;
