import { NextResponse, type NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

export function middleware(_req: NextRequest) {
  const res = NextResponse.next();
  return res;
}

export default withAuth(middleware, ["/home/*", "/dashboard/*", "/checkout"]);
