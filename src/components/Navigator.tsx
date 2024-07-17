import Link from 'next/link'

type Route = {
  name: string,
  path: string,
  parameters?: QueryParameters[]
  anchor?: string
}
type QueryParameters = { key: string, value: string }

export default function Navigator({routes, spacer}: {routes: Route[], spacer?: string}){
  
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

  const routeList = routes.map((route) => (
      <div key={route.path}>
        { spacer && route.path != routes[0].path && <span className="px-2">{spacer}</span> }
        <Link className="mx-auto hover: hover:text-blue-600" href={generateUrl(route)}>{route.name}</Link>
      </div>
    )
  )


  return (
    <div className="flex">
      {routeList}
    </div>
  )

}