import { Metadata } from "next";
import SignupContent from "@/components/SignupContent";

export const metadata: Metadata = {
  title: "Sign Up | Jadoo Travel",
  description: "Create your Jadoo Travel account",
};

export default function SignupPage() {
  return (
    <main>
      <SignupContent />
    </main>
  );
}
