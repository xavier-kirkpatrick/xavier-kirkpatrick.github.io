import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export const Route = createRootRoute({
  component: () => (
    <div className="grid grid-cols-[204px_1fr] bg-mainBgColour">
      <nav className="min-h-screen">
        <SideBar />
      </nav>
      <div className="flex flex-col">
        <aside className="h-[150px] ">
          <Header />
        </aside>
        <main className="flex-auto ">
          <Outlet />
        </main>
      </div>

      {/* <TanStackRouterDevtools /> */}
    </div>
  ),
});

{
  /* <Link to="/" className="[&.active]:font-bold">
          Home
        </Link> */
}
