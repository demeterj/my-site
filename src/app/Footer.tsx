import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="flex justify-around py-6 bg-blue-100 border-t-2 border-solid border-black">
      <div className="flex flex-col">
        <span className="font-bold">Email</span>
        <a href="mailto:demeterj@umich.edu" className="underline">demeterj@umich.edu</a>
      </div>
      <div className="flex flex-col">
        <span className="font-bold pb">Follow Me</span>
        <a href="https://www.linkedin.com/in/jonathan-demeter-6aaaa1170/" target="_blank">
          <Image
            src="/LinkedInLogo.png"
            alt="LinkedIn"
            width={80}
            height={80}
          />
        </a>
      </div>
      <div className="flex flex-col text-sm justify-center">
        © {year} By Jonathan Demeter
      </div>
    </div>
  )
}