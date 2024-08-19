import Image from 'next/image'
import ContentBox from '@/components/contentBox';

const myBio = `I'm a software engineer and product manager who's motivated by building solutions that improve the lives of everyday people.`;

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex justify-around w-full border-solid border-red-500">
        <div className="w-[700px] mt-[150px]">
          <p className="text-4xl font-bold">Hi, I'm <span className="text-blue-900">Jonathan Demeter!</span></p>
          <p className="text-2xl">{myBio}</p>
        </div>
        <ContentBox>
          <Image
            src="/ProfilePicture.JPG"
            alt="Picture of Jon"
            width={400}
            height={400}
          />
          <div className="w-[400px] mt-2 text-sm pr-4">
            Returning to the States after backpacking in Japan for three weeks!
          </div>
        </ContentBox>
      </div>
    </main>
  );
}
