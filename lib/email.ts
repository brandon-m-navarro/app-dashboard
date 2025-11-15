import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type SendEmailOptions = {
  from?: string;
  to: string;
  subject?: string;
  text?: string;
  html?: string;
};
type RawEmailOptions = {
  from: string;
  to: string;
  subject?: string;
  text?: string;
  html?: string;
};

export async function sendEmail(options: SendEmailOptions) {
  const {
    to,
    subject,
    text,
    html,
    from = "noreply@yourdomain.com",
  } = options;

  console.log('constructing email')

  const payload: RawEmailOptions = {
    from,
    to,
    subject,
    text,
    html,
  };

  console.log('constructed: ', payload)

  return await resend.emails.send(payload as any);
}
