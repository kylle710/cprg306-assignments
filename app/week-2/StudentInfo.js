export function MyName() 
{
    return <h1>Name: Kylle B.</h1>;
}

import Link from "next/link";

export function GitLink() {
  return (
    <p>
      GitHub:{" "}
      <Link
        href="https://github.com/kylle710/cprg306-assignments"
        target="_blank"
        rel="noopener noreferrer"
      >
        kylle710/cprg306-assignments
      </Link>
    </p>
  );
}