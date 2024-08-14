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

export default function Navigator({routes}: {routes: Route[]}){
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
      {index !== 0 && <span>|</span>}
        <Link
          className={`px-2 mx-2 font-bold bg-fade-in py-0 ` + (route.path === currentPathname && 'underline')}
          href={generateUrl(route)}
        >
          {route.name}
        </Link>
      </Fragment>
    )
  )

  return (
    <div className="flex justify-between items-center">
      {routeList}
    </div>
  )

}