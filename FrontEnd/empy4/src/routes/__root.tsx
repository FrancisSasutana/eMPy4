import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <>
    <div className="p-2 flex gap-2 bg-blue-400">
      <Link to="/home" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/songs" className="[&.active]:font-bold">
        Songs
      </Link>{' '}
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })