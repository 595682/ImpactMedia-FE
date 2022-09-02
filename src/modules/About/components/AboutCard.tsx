import React from 'react';

interface IAboutCard {
  title: string;
  content: string;
}
const AboutCard = ({ title, content }: IAboutCard) => {
  return (
    <div className="w-full rounded-xl bg-white px-6 py-8 shadow-xl">
      <h3 className="mb-3 text-4xl">{title}</h3>
      <p>{content}</p>
    </div>
  );
};
export default AboutCard;
