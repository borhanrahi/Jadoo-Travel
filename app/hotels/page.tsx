import { Metadata } from "next";
import HotelsContent from "@/components/HotelsContent";

export const metadata: Metadata = {
  title: "Hotels | Jadoo Travel",
  description: "Find and book the best hotels worldwide with Jadoo Travel",
};

export default function HotelsPage() {
  return (
    <main>
      <HotelsContent />
    </main>
  );
}
