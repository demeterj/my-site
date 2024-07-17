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
    <div className="flex w-full p-4 bg-blue-100 items-center justify-between border-b-2 border-solid border-black">
      <Logo />
      <Navigator routes={initialRoutes} spacer="|" />
    </div>
  )
}