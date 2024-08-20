import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resume")({
  component: Resume,
});

export default function Resume() {
  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <h1>Resume availble on request</h1>
      <p>kirkpatrickxavier@gmail.com</p>
    </div>
  );
}
