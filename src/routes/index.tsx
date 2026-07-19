import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Build Successful</h1>
      <p>The routing system is now active.</p>
    </div>
  );
}
