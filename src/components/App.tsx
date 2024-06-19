import { RouterProvider, createRouter } from "@tanstack/react-router";
import { Route as RootRoute } from "../routes/__root";
import { routes } from "../routes";

const router = createRouter({
  routeTree: RootRoute.addChildren(routes),
});

function App() {
  // Register the router instance for type safety
  return <RouterProvider router={router} />;
}

export default App;
