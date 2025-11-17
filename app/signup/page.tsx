// app/signup/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // const session = await res.json();
      const {
        /*data, error*/
      } = await authClient.signUp.email(
        {
          email, // user email address
          password, // user password -> min 8 characters by default
          name, // user display name
          callbackURL: "/dashboard", // A URL to redirect to after the user verifies their email (optional)
        },
        {
          onRequest: (ctx) => {
            //show loading
            console.log(ctx);
          },
          onSuccess: (ctx) => {
            console.log(ctx);
            //redirect to the verify email page
            router.push(`/signup/verify?email=${encodeURIComponent(email)}`);
          },
          onError: (ctx) => {
            alert(ctx.error.message);
          },
        }
      );
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 p-6">
      <div className="w-full max-w-md rounded-2xl bg-gray-50 shadow-xl p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Create Account
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Sign up to access your dashboard securely.
        </p>

        {error && (
          <p className="text-red-600 text-center mb-4 font-medium">{error}</p>
        )}

        {/* OAuth Buttons */}
        <div className="flex flex-col gap-3 mb-6">
          <button
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium text-gray-800 hover:bg-gray-100 transition"
            onClick={async () => {
              try {
                await authClient.signIn.social({
                  provider: "google",
                  callbackURL: "/dashboard",
                  disableRedirect: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <FaGoogle className="h-5 w-5" />
            Continue with Google
          </button>
          <button
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-800 px-4 py-2 font-medium text-white hover:bg-gray-900 transition"
            onClick={async () => {
              try {
                await authClient.signIn.social({
                  provider: "github",
                  callbackURL: "/dashboard",
                  disableRedirect: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <FaGithub className="h-5 w-5" />
            Continue with GitHub
          </button>
        </div>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-400">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg text-black border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none transition"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg text-black border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none transition"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg text-black border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none transition"
            required
          />
          <button
            type="submit"
            className="mt-2 rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700 transition"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
