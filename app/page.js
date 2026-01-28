import Link from "next/link";

export default function Page() {
  return (
    <div>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <WeekTwoLink />
        <WeekThreeLink />
    </div>
  );
}

export function WeekTwoLink() {
    return (
      <Link href="/week-2">
        Go to week-2 -→ 
      </Link>
  );
}

export function WeekThreeLink() {
    return (
      <Link href="/week-3">
        Go to week-3
      </Link>
  );
}
