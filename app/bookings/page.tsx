import BookingsContent from "@/components/BookingsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookings | Jadoo Travel",
  description: "Manage your travel bookings and reservations with Jadoo Travel",
};

export default function BookingsPage() {
  return (
    <main>
      <BookingsContent />
    </main>
  );
}
