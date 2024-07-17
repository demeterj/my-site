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
    <div className="flex w-full bg-secondary-bg-bolor items-center justify-between">
      <Logo />
      <Navigator routes={initialRoutes} spacer="|" />
    </div>
  )
}