import * as React from "react";

interface VerifyEmailTemplateProps {
  firstName: string;
  url: string;
}

export function VerifyEmailTemplate({
  firstName,
  url,
}: VerifyEmailTemplateProps) {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>

      <span>Click to verify your email!</span>
      <a href={url}>{url}</a>
    </div>
  );
}
