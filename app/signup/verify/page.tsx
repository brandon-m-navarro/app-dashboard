"use client";

import { useState } from "react";
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

    // Check email was provided
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

      if (error) {
        setStatus("error");
      } else {
        setStatus("sent");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold">Verify Your Email</h1>
        <p className="text-muted-foreground mt-2">
          We’ve sent a verification link to:
        </p>

        {email ? (
          <p className="font-medium mt-1">{email}</p>
        ) : (
          <p className="font-medium mt-1">(Check your inbox)</p>
        )}

        <p className="mt-4 text-sm text-muted-foreground">
          Please click the link in the message to finish creating your account.
        </p>

        <button
          onClick={handleResend}
          disabled={isSending}
          className="mt-6 w-full py-2 rounded-md bg-black text-white disabled:bg-neutral-400"
        >
          {isSending ? "Resending..." : "Resend Email"}
        </button>

        {status === "sent" && (
          <p className="mt-3 text-green-600 text-sm">
            Verification email sent again!
          </p>
        )}

        {status === "error" && (
          <p className="mt-3 text-red-600 text-sm">
            Could not resend verification email.
          </p>
        )}
      </div>
    </div>
  );
}
