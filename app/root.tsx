import { Outlet, LiveReload, Link, Links, Meta } from "remix";

// import globalStylesUrl from '~/styles/global.css'

// For <Links />
// export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];

export const meta = () => {
  const description = "A cool blog";
  const keywords = "remix, react, javascript";

  return {
    description,
    keywords,
  };
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children, title }: any) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
        <title>{title || "Remix Blog"}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

function Layout({ children }: any) {
  return (
    <>
      <nav>
        <Link to="/">Remix</Link>

        <ul>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>

      <div>{children}</div>
    </>
  );
}
