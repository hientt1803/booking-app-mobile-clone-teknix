// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   // const { get } = request.cookies;
//   // if (get("access_token")?.value) {
//   //   NextResponse.json({ status: 200, message: "user authenticated" });
//   // } else {
//   //   NextResponse.json({ status: 403, message: "user not authenticated" });
//   // }

//   // Bot detection
//   // const botUserAgents = ["", ""];

//   // const userAgent = request.headers.get("user-agent") || "";

//   // if (botUserAgents.some((bot) => userAgent.toLowerCase().includes(bot))) {
//   //   return new NextResponse("Bot traffic detected and blocked", {
//   //     status: 403,
//   //   });
//   // }

//   return NextResponse.next();
// }

// export const config = {
//   // Edge function https://blog.logrocket.com/using-next-js-middleware-edge-functions/
//   // runtime: "experimental-edge", //This specifies the runtime environment that the middleware function will be executed in.
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     "/((?!api|_next/static|_next/image|favicon.ico).*)",
//   ],
// };
