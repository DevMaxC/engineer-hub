import { NextRequest } from 'next/server';


export default function middleware(request: NextRequest) {
  // Construct the url
  const url = new URL(request.url);

  // Only run the middleware on the home route
  if (url.pathname === '/') {
    // Store the country where will be redirecting
    let country = request.headers.get('x-vercel-ip-country').toLowerCase();

    // Update url pathname
    url.pathname = `/${country}.html`;

    // Return a new redirect response
    return Response.redirect(url);
  }