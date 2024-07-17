import profilePic from './proPic.jpg'
import Image from 'next/image'

const myBio = `Hi! I'm a Software Engineer and Product Manager who loves 
being deeply involved in building interesting and impactful products. To me, the whole product development process is interesting, 
and I've found that the longer I sepnd with a produc, the more ownership I develop and te better it becomes.`;

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-around w-full">
      <div className="my-auto w-[500px]">
        <p className="text-[50px]">Jonathan Demeter</p>
        <span>{myBio}</span>
      </div>
      <Image 
        src={profilePic}
        alt="Picture of Jon"
        width={500}
        height={500}
      />
      </div>
    </main>
  );
}
