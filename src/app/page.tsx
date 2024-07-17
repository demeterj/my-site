import Image from 'next/image'
import ContentBox from '@/components/contentBox';

const myBio = `Hi! I'm a Software Engineer and Product Manager who loves 
being deeply involved in building interesting and impactful products. To me, the whole product development process is interesting, 
and I've found that the longer I sepnd with a produc, the more ownership I develop and te better it becomes.`;

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex justify-around w-full border-solid border-red-500">
        <div className="w-[700px] mt-[150px]">
          <ContentBox>
            <p className="text-[50px]">Jonathan Demeter</p>
            {myBio}
          </ContentBox>
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
