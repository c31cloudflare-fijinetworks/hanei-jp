export const onRequest: PagesFunction = async (context) => {
  const accept = context.request.headers.get("Accept") || "";
  const url = new URL(context.request.url);
  if (accept.includes("text/markdown") && (url.pathname === "/" || url.pathname === "/index")) {
    return context.env.ASSETS.fetch(new URL("/index.md", url.origin));
  }
  return await context.next();
};
