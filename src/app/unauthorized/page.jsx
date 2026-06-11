import Link from "next/link";

const Unauthorized = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-bold text-error">401</h1>

        <h2 className="mt-4 text-3xl font-semibold">Unauthorized Access</h2>

        <p className="mt-3 text-base-content/70">
          Sorry, you do not have permission to access this page. Please log in
          with an authorized account.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/" className="btn btn-primary">
            Go Home
          </Link>

          <Link href="/login" className="btn btn-outline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
