import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { to, subject, url } = body;

    const { data, error } = await resend.emails.send({
      from: "Brandon <noreply@bnav.dev>",
      to,
      subject,
      text: `Click to verify your email! - ${url}`
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
