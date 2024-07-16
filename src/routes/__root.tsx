import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-mainBgColour">
      <Header />
      <SideBar />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </div>
  ),
});

{
  /* <Link to="/" className="[&.active]:font-bold">
          Home
        </Link> */
}
