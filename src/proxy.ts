import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Prevent browsers from guessing content types
  response.headers.set("X-Content-Type-Options", "nosniff");

  // Control how much referrer information is shared
  response.headers.set(
    "Referrer-Policy",
    "strict-origin-when-cross-origin"
  );

  // Prevent the website from being embedded in an iframe
  response.headers.set("X-Frame-Options", "DENY");

  return response;
}

export const config = {
  matcher: [
    "/",
    "/projectDetailPage/:path*",
  ],
};
