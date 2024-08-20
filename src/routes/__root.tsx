import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <meta
        name="description"
        content="I am a full-stack software developer. This is my web presence, built as an example of work and as a platform for my development, and non-development projects."
      />
      <div className="max- flex max-h-screen flex-col bg-mainBgColour">
        <div className="flex flex-1 flex-row">
          <nav className="w-52 flex-shrink-0">
            <SideBar />
          </nav>
          <div className="flex flex-1 flex-col">
            <aside>
              <Header />
            </aside>
            <main className="flex-1">
              <Outlet />
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
        <TanStackRouterDevtools />
      </div>
    </QueryClientProvider>
  );
}
