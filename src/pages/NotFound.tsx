import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="grid-backdrop flex min-h-screen items-center justify-center bg-background px-6">
    <div className="max-w-md">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 font-display text-6xl leading-none">
        This page <span className="italic text-primary">doesn&apos;t exist.</span>
      </h1>
      <p className="mt-5 text-muted">The link may be old or mistyped. The portfolio lives on the home page.</p>
      <Link to="/" className="btn btn-primary mt-8">
        Back to home
      </Link>
    </div>
  </main>
);

export default NotFound;
