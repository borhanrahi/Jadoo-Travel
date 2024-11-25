import { Metadata } from "next";
import FlightsContent from "@/components/FlightsContent";

export const metadata: Metadata = {
  title: "Flights | Jadoo Travel",
  description: "Book flights to destinations worldwide with Jadoo Travel",
};

export default function FlightsPage() {
  return (
    <main>
      <FlightsContent />
    </main>
  );
}
