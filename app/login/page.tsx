"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { /*data, error*/ } = await authClient.signIn.email(
        {
          email,
          password,
          /**
           * A URL to redirect to after the user verifies their email (optional)
           */
          callbackURL: "/dashboard",
          rememberMe: false,
        },
        {
          onError: (ctx) => {
            // Handle errors
            if (ctx.error.status === 403) {
              alert("Please verify your email address");
            } else {
              alert(ctx.error.message);
            }
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
          App Dashboard
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Sign in to access all your apps securely.
        </p>

        {error && (
          <p className="text-red-600 text-center mb-4 font-medium">{error}</p>
        )}

        {/* OAuth Buttons */}
        <div className="flex flex-col gap-3 mb-6">
          <button
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium text-gray-800 hover:bg-gray-100 transition"
            onClick={async () => {
              await authClient.signIn.social({
                /**
                 * The social provider ID
                 */
                provider: "google",
                /**
                 * A URL to redirect after the user authenticates with the provider
                 */
                callbackURL: "/dashboard",
                /**
                 * A URL to redirect if an error occurs during the sign in process
                 */
                errorCallbackURL: "/error",
                /**
                 * A URL to redirect if the user is newly registered
                 */
                newUserCallbackURL: "/welcome",
                /**
                 * disable the automatic redirect to the provider.
                 * @default false
                 */
                disableRedirect: true,
              });
            }}
          >
            <FaGoogle className="h-5 w-5" />
            Continue with Google
          </button>
          <button
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-800 px-4 py-2 font-medium text-white hover:bg-gray-900 transition"
            onClick={async () => {
              await authClient.signIn.social({
                /**
                 * The social provider ID
                 */
                provider: "github",
                /**
                 * A URL to redirect after the user authenticates with the provider
                 */
                callbackURL: "/dashboard",
                /**
                 * A URL to redirect if an error occurs during the sign in process
                 */
                errorCallbackURL: "/error",
                /**
                 * A URL to redirect if the user is newly registered
                 */
                newUserCallbackURL: "/welcome",
                /**
                 * disable the automatic redirect to the provider.
                 * @default false
                 */
                disableRedirect: true,
              });
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

        {/* Email/password form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6 text-sm">
          {`Don't have an account? `}
          <Link href="/signup" className="text-indigo-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
