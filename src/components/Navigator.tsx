'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react';

type Route = {
  name: string,
  path: string,
  parameters?: QueryParameters[]
  anchor?: string
}
type QueryParameters = { key: string, value: string }

const routes = [
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

export default function Navigator({closeMenu}: {closeMenu: Function}){
  const currentPathname = usePathname()
 
  
  function generateUrl(route: Route) {
    let url = route.path;
    if(route.parameters) {
      url += '?' + route.parameters.map(parameter => parameter.key + '=' + parameter.value).join('&');
    }
    if (route.anchor) {
      url += '#' + route.anchor;
    }
    return url
  }

  const routeList = routes.map((route, index) => (
    <Fragment key={route.path}>
        <Link
          onClick={() => closeMenu()}
          className={`font-bold bg-fade-in text-4xl animate-fadeIn opacity-0 ` + (route.path === currentPathname && 'underline')}
          style={{'--slidein-delay': `${(index*150 + 300)}ms`} as React.CSSProperties}
          href={generateUrl(route)}
        >
          {route.name}
        </Link>
      </Fragment>
    )
  )

  return (
    <>
      {routeList}
    </>
  )
}