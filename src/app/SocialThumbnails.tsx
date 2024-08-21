import Image
 from "next/image";

export default function SocialThumbnails() {
  const thumbnails = [
    {
      key: 'linkedin',
      src: "/LinkedIn.png",
      alt: "LinkedIn",
      href: "https://www.linkedin.com/in/jonathan-demeter-6aaaa1170/"
    },
    {
      key: 'github',
      src: "/github-mark.png",
      alt: "Github",
      href: "https://github.com/demeterj"
    },
    {
      key: 'email',
      src: "/mail.png",
      alt: "Email",
      href: "mailto:demeterj@umich.edu"
    }
  ]
  return (
    <>
    {
      thumbnails.map(thumbnail => (
        <a key={thumbnail.key} className="transition-all hover:scale-125 duration-1000" href={thumbnail.href} target="_blank">
          <Image
            src={thumbnail.src}
            alt={thumbnail.alt}
            width={25}
            height={25}
          />
        </a>
      ))
    }
    </>
  )
}