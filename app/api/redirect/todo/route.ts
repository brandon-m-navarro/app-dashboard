import { NextRequest, NextResponse } from "next/server";
import { authClient } from "@/lib/auth-client";

export async function GET(req: NextRequest) {
  try {
    // Pass incoming request headers so authClient sees the session cookie
    const { data, error } = await authClient.token({
      fetchOptions: {
        headers: req.headers,
      },
    });

    if (error || !data?.token) {
      console.error("JWT generation failed:", error);
      return NextResponse.json({ error: "Cannot generate JWT" }, { status: 401 });
    }

    const jwtToken = data.token;

    // Redirect to App B and set the JWT in a cookie
    const response = NextResponse.redirect("https://localhost:3000"); // App B URL

    response.cookies.set("auth_token", jwtToken, {
      httpOnly: true,      // prevents JS access
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",           // cookie available on all App B routes
      maxAge: 60 * 60,     // 1 hour
    });

    return response;
  } catch (err) {
    console.error("Redirect error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
