import {NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.redirect("https://dash.bnav.dev");
  } catch (err) {
    console.error("Redirect error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
