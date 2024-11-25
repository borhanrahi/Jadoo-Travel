import { Metadata } from "next";
import LoginContent from "@/components/LoginContent";

export const metadata: Metadata = {
  title: "Login | Jadoo Travel",
  description: "Login to your Jadoo Travel account",
};

export default function LoginPage() {
  return (
    <main>
      <LoginContent />
    </main>
  );
}
