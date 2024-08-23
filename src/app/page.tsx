import Image from 'next/image'
import ContentBox from '@/components/contentBox';

const myBio = `I'm a software engineer and product manager who's motivated by building solutions that improve the lives of everyday people.`;

export default function Home() {
  return (
    <div className="flex justify-around items-center w-full h-full pl-[40px]">
      <ContentBox>
        <Image
          src="/ProfilePicture.JPG"
          alt="Picture of Jon"
          width={450}
          height={450}
        />
        <div className="w-[400px] mt-2 text-sm pr-4 font-bold">
          Returning to the States after backpacking in Japan for three weeks!
        </div>
      </ContentBox>
      <div className="w-[600px]">
        <p className="text-4xl font-bold">Hi, I'm Jonathan Demeter!</p>
        <p className="text-2xl">{myBio}</p>
      </div>
    </div>
  );
}
