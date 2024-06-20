import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/Header";

export const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-main-off-white">
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});

{
  /* <Link to="/" className="[&.active]:font-bold">
          Home
        </Link> */
}
