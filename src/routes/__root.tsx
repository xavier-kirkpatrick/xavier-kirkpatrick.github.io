import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <div className="grid grid-cols-[204px_1fr] bg-mainBgColour">
        {/* First column */}
        <nav className="min-h-screen">
          <SideBar />
        </nav>
        {/* Second column */}
        <div className="flex flex-col">
          <aside>
            <Header />
          </aside>
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
        {/* <TanStackRouterDevtools /> */}
      </div>
    </QueryClientProvider>
  ),
});
