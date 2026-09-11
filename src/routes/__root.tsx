import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display text-primary" style={{ textShadow: "var(--shadow-text)" }}>404</h1>
        <h2 className="mt-4 text-xl font-display text-foreground">Path Not Found</h2>
        <p className="mt-2 text-sm text-muted-foreground italic">
          This route lies beyond the veil of fate.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center border-2 border-primary bg-transparent px-6 py-2 text-sm font-display tracking-widest uppercase text-foreground transition-colors hover:bg-primary"
          >
            Return
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Archive of the Seeker — Portfolio" },
      { name: "description", content: "A portfolio styled after the Metaphor: ReFantazio command menu." },
      { property: "og:title", content: "Archive of the Seeker — Portfolio" },
      { property: "og:description", content: "A portfolio styled after the Metaphor: ReFantazio command menu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,700;0,6..96,900;1,6..96,700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Noto+Serif+JP:wght@500;700;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}