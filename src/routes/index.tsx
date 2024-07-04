import { createFileRoute } from "@tanstack/react-router";
import HomePage from "../pages/Home";

// The Index component is rendered inside the root route or __route.tsx via the outlet.
// This is done via the createLazyFileRoute function which in configured to render Index below.

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="border-2 border-solid border-green-500">
      <HomePage />
    </div>
  );
}
