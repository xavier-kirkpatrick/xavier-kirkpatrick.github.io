import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import "../styles/hide_cursor.css";
import ReactGA from "react-ga4";
import DarkModeGlobalProvider from "../components/DarkModeContext";

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: RootComponent,
});

// Initialize Google Analytics
const trackingId: string = import.meta.env.VITE_REACT_GA_ID;
ReactGA.initialize(trackingId);

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <meta
        name="description"
        content="I am a full-stack software developer. This is my web presence, built as an example of work and as a platform for my development, and non-development projects."
      />
      <DarkModeGlobalProvider>
        <div className="a">
          {/* className 'a' Hides the hand cursor from showing over links */}
          {/* CustomCursor component below transforms the cursor to a '+' sign, site-wide. */}
          <CustomCursor />
          <div className="flex max-h-screen flex-col">
            <div className="flex flex-1 flex-row">
              <nav className="hidden w-52 flex-shrink-0 md:block">
                <SideBar />
              </nav>
              <div className="flex h-dvh flex-1 flex-col">
                <aside>
                  <Header />
                </aside>

                <div className="flex-1 overflow-auto">
                  <Outlet />
                </div>

                <footer>
                  <Footer />
                </footer>
              </div>
            </div>
          </div>
        </div>
      </DarkModeGlobalProvider>
    </QueryClientProvider>
  );
}
