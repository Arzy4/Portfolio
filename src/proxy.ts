import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasVisitedHome =
    request.cookies.get("hasVisitedHome")?.value === "true";

  // Redirect first-time visitors to the homepage
  if (
    pathname.startsWith("/projectDetailPage/") &&
    !hasVisitedHome
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const response = NextResponse.next();

  // Mark homepage as visited
  if (pathname === "/") {
    response.cookies.set("hasVisitedHome", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 24 hours
    });
  }

  // Security headers
  response.headers.set("X-Content-Type-Options", "nosniff");

  response.headers.set(
    "Referrer-Policy",
    "strict-origin-when-cross-origin"
  );

  response.headers.set("X-Frame-Options", "DENY");

  return response;
}

export const config = {
  matcher: ["/", "/projectDetailPage/:path*"],
};
