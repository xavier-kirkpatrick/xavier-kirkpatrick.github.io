import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resume")({
  component: Resume,
});

export default function Resume() {
  return (
    <div className="flex max-h-svh flex-col items-center justify-center">
      <h1>Resume avalible on request</h1>
      <p>kirkpatrickxavier@gmail.com</p>
    </div>
  );
}
