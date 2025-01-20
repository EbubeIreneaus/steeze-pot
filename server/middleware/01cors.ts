export default defineEventHandler((event) => {
  setResponseHeaders(event, {
    "Access-Control-Allow-Origin": "*", // Allow all origins or specify a domain
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  });

  // Handle preflight requests
  if (event.node.req.method === "OPTIONS") {
    event.node.res.statusCode = 204;
    event.node.res.end();
  }
});
