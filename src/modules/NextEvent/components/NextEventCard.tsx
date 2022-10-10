import Image from 'next/image';
import React from 'react';

interface INextEventCard {
  title: string;
  image: any;
  key: number;
}
const NextEventCard = ({ title, image }: INextEventCard) => {
  return (
    <>
      <div className="m-4 flex h-40 w-full items-center justify-center">
        <Image src={image} alt="title" />
      </div>
      <div className="mt-8 text-center text-sm font-semibold text-theme-primary">
        {title}
      </div>
    </>
  );
};
export default NextEventCard;
