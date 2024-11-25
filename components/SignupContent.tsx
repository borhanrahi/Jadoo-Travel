"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const SignupContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup attempt:", { name, email });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-6xl w-full mx-auto px-4 py-8 flex">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#181E4B] mb-2">
              Create Account
            </h1>
            <p className="text-[#5E6282]">
              Join us for better travel experiences
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-[#DF694F] w-5 h-5" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-100 focus:outline-none focus:border-[#DF694F] focus:ring-2 focus:ring-[#DF694F]/20 text-gray-800 transition-all"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-[#DF694F] w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-100 focus:outline-none focus:border-[#DF694F] focus:ring-2 focus:ring-[#DF694F]/20 text-gray-800 transition-all"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-[#DF694F] w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-12 py-3 rounded-xl border-2 border-gray-100 focus:outline-none focus:border-[#DF694F] focus:ring-2 focus:ring-[#DF694F]/20 text-gray-800 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-[#DF694F] transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center text-sm">
              <label className="flex items-center text-[#5E6282]">
                <input type="checkbox" className="mr-2" required />I agree to
                the{" "}
                <Link
                  href="/terms"
                  className="text-[#DF694F] hover:text-[#c85640] ml-1"
                >
                  Terms & Conditions
                </Link>
              </label>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-[#DF694F] text-white py-3 rounded-lg hover:bg-[#c85640] transition-colors"
            >
              Create Account
            </button>

            {/* Login Link */}
            <p className="text-center text-[#5E6282]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#DF694F] hover:text-[#c85640] font-medium"
              >
                Login
              </Link>
            </p>

            {/* Social Signup */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-[#5E6282]">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "google", icon: "/icons/google.svg" },
                { name: "facebook", icon: "/icons/facebook.svg" },
                { name: "apple", icon: "/icons/apple.svg" },
              ].map((provider) => (
                <button
                  key={provider.name}
                  type="button"
                  className="flex items-center justify-center p-4 border rounded-lg hover:bg-gray-50 transition-all hover:shadow-md"
                >
                  <div className="w-6 h-6 text-gray-600">
                    {provider.name === "google" && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                      </svg>
                    )}
                    {provider.name === "facebook" && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                    {provider.name === "apple" && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block md:w-1/2">
          <div className="relative h-full min-h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
              alt="Sign Up"
              fill
              className="object-cover rounded-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#DF694F]/20 to-[#F1A501]/20 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupContent;
