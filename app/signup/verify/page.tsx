"use client";

import { useState, Suspense } from "react";
import { authClient } from "@/lib/auth-client";
import { useSearchParams } from "next/navigation";

export default function VerifyEmailPage() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const search = useSearchParams();
  const email = search.get("email");

  const handleResend = async () => {
    setIsSending(true);
    setStatus("idle");

    if (!email) {
      setStatus("error");
      setIsSending(false);
      return;
    }

    try {
      const { error } = await authClient.sendVerificationEmail({
        email: email,
        callbackURL: "/dashboard",
      });

      if (error) setStatus("error");
      else setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Suspense>
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 p-6">
        <div className="w-full max-w-md rounded-2xl bg-gray-50 shadow-xl p-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Verify Your Email
          </h1>

          <p className="text-gray-600 mb-2">
            We’ve sent a verification link to:
          </p>

          <p className="font-semibold text-gray-900 mb-4">
            {email ? email : "(Check your inbox)"}
          </p>

          <p className="text-gray-600 text-sm mb-8">
            Open the email and tap the verification link to finish creating your
            account.
          </p>

          <button
            onClick={handleResend}
            disabled={isSending}
            className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700 transition disabled:bg-indigo-300"
          >
            {isSending ? "Resending..." : "Resend Email"}
          </button>

          {status === "sent" && (
            <p className="mt-4 text-green-600 font-medium text-sm">
              Verification email sent again!
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 text-red-600 font-medium text-sm">
              Could not resend verification email.
            </p>
          )}
        </div>
      </main>
    </Suspense>
  );
}
