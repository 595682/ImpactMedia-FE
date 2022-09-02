import Image from 'next/image';

interface IApproachCard {
  title: string;
  description: string;
  image: any;
}
const ApproachCard = ({ title, description, image }: IApproachCard) => {
  return (
    <div className="flex h-full flex-col items-center justify-center overflow-hidden rounded-xl bg-white p-4 text-theme-primary shadow-lg">
      <div className="mb-6 flex h-[200px] w-full items-center justify-center rounded-md">
        <Image src={image} alt={description} />
      </div>
      <p className=" mb-3 max-w-[22ch] text-center text-lg font-bold ">
        {title}
      </p>
      <p className="grow text-center text-base">{description}</p>
    </div>
  );
};
export default ApproachCard;
