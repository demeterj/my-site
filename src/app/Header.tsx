import Navigator from "../components/Navigator";
import Logo from "./Logo";

export default function Header() {
  const initialRoutes = [
    {
      name: 'Home',
      path: '/',
      parameters: [],
      anchor: ''
    },
    {
      name: 'Work',
      path: '/work',
      parameters: [],
      anchor: ''
    },
    {
      name: 'About Me',
      path:'/about-me',
      anchor: ''
    },
    {
      name: 'Contact',
      path:'/contact-me',
      anchor: ''
    }
  ];
  return (
    <div 
      className={`
        sticky
        top-[-60px]
        hover:top-0
        z-10
        w-full
        flex
        items-center
        justify-between
        p-4
      bg-blue-100
        border-b-2
        border-solid
        border-black
        transition-all
        ease-in-out
        delay-150
      `}
    >
      <Logo />
      <Navigator routes={initialRoutes} />
      <div className="absolute transparent h-[50px] bottom-[-50px] w-full"></div>
    </div>
  )
}