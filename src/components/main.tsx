import { StrictMode } from "react";
import { Route as rootRoute } from "../routes/__root";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createRouter,
  NotFoundRoute,
} from "@tanstack/react-router";

// TanStack says to use notFoundComponent instead of NotFoundRoute but its not listed as an import.
// I have tried updating TanStack router but it doesnt work.
// Need to investigate further?

// Import the generated route tree
import { routeTree } from "../routeTree.gen";

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => "404 Not Found",
});

// Create a new router instance
const router = createRouter({ routeTree, notFoundRoute });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
