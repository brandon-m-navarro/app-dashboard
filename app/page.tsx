import Link from "next/link";
import { cookies } from "next/headers";

export default async function LandingPage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("better-auth.session");
  const isLoggedIn = Boolean(sessionCookie?.value);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to App Dashboard
        </h1>
        <p className="text-gray-700 mb-8">
          Central authentication for all your applications. Manage your account
          securely and sign in with Google, GitHub, or email/password.
        </p>

        {isLoggedIn ? (
          <Link
            href="/dashboard"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            Go to Dashboard
          </Link>
        ) : (
          <div className="flex justify-center gap-4">
            <Link
              href="/login"
              className="inline-block rounded-lg bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="inline-block rounded-lg bg-gray-200 px-6 py-3 text-gray-900 font-semibold hover:bg-gray-300 transition"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
