import { Metadata } from "next";
import DestinationsContent from "@/components/DestinationsContent";

export const metadata: Metadata = {
  title: "Destinations | Jadoo Travel",
  description:
    "Explore amazing travel destinations around the world with Jadoo Travel",
};

export default function DestinationsPage() {
  return (
    <main>
      <DestinationsContent />
    </main>
  );
}
