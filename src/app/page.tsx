import Image from 'next/image'
import ContentBox from '@/components/contentBox';

const myBio = `I'm a software engineer and product manager who's motivated by building solutions that improve the lives of everyday people.`;

export default function Home() {
  return (
    <div className="h-full flex justify-around items-center w-full border-solid border-red-500">
      <div className="w-[700px]">
        <p className="text-4xl font-bold">Hi, I'm <span className="text-blue-900">Jonathan Demeter!</span></p>
        <p className="text-2xl">{myBio}</p>
      </div>
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
    </div>
  );
}
