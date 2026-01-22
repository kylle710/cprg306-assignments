import Link from "next/link";

export default function Page() {
  return (
    <div>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <WeekTwoLink />
    </div>
  );
}

export function WeekTwoLink() {
    return (
      <Link href="http://localhost:3000/week-2">
        Go to week-2
      </Link>
  );
}