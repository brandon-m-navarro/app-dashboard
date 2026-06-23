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
  const [githubLoading, setGithubLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const {
        /*data, error*/
      } = await authClient.signIn.email(
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
          onSuccess: (ctx) => {
            console.log(ctx);
          },
        },
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
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#091a23] to-[purple-700] p-6">
      <div className="w-full max-w-md rounded-2xl bg-[#0d212c] border-[#163341] border-[1px] shadow-xl p-8">
        <h1 className="text-4xl font-bold text-white-900 mb-6 text-center">
          App Dashboard
        </h1>
        <p className="text-center text-white-600 mb-8">
          Sign in to access all your apps securely.
        </p>

        {error && (
          <p className="text-red-600 text-center mb-4 font-medium">{error}</p>
        )}

        {/* OAuth Buttons */}
        <div className="flex flex-col gap-3 mb-6">
          {googleLoading ? (
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-gray-800 hover:bg-gray-100 transition"
              disabled
            >
              <svg
                className="mr-3 size-5 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Loading..
            </button>
          ) : (
            <button
              className="flex items-center cursor-pointer justify-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-gray-800 hover:bg-gray-100 transition"
              onClick={async () => {
                try {
                  setGoogleLoading(true);
                  await authClient.signIn.social({
                    provider: "google",
                    callbackURL: "/dashboard",
                    disableRedirect: false,
                    fetchOptions: {
                      onSuccess: (ctx) => {
                        console.log(ctx);
                        setGoogleLoading(false);
                      },
                      onError: (ctx) => {
                        setGoogleLoading(false);
                        alert(ctx.error.message);
                      },
                    },
                  });
                } catch (err) {
                  console.error(err);
                  setGoogleLoading(false);
                }
              }}
            >
              <FaGoogle className="h-5 w-5" />
              Continue with Google
            </button>
          )}

          {githubLoading ? (
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-gray-800 hover:bg-gray-100 transition"
              disabled
            >
              <svg
                className="mr-3 size-5 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Loading..
            </button>
          ) : (
            <button
              className="flex items-center justify-center cursor-pointer gap-2 rounded-lg bg-gray-800 px-4 py-2 font-medium text-white hover:bg-gray-900 transition"
              onClick={async () => {
                try {
                  setGithubLoading(true);
                  await authClient.signIn.social({
                    provider: "github",
                    callbackURL: "/dashboard",
                    disableRedirect: false,
                    fetchOptions: {
                      onSuccess: (ctx) => {
                        console.log(ctx);
                        setGithubLoading(false);
                      },
                      onError: (ctx) => {
                        setGithubLoading(false);
                        alert(ctx.error.message);
                      },
                    },
                  });
                } catch (err) {
                  console.error(err);
                  setGithubLoading(false);
                }
              }}
            >
              <FaGithub className="h-5 w-5" />
              Continue with GitHub
            </button>
          )}
        </div>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-500" />
          <span className="mx-2 text-gray-400">or</span>
          <hr className="flex-1 border-gray-500" />
        </div>

        {/* Email/password form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg text-white border border-gray-500 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none transition"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg text-white border border-gray-500 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none transition"
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
