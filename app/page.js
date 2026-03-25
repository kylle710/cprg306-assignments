import Link from "next/link";

export default function Page() {
  return (
    <div>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <WeekTwoLink />
        <WeekThreeLink />
        <WeekFourLink />
        <WeekFiveLink />
        <WeekSixLink />
        <WeekSevenLink/>
        <WeekEightLink/>
        <WeekNineLink/>
        <WeekTenLink/>
    </div>
  );
}

export function WeekTwoLink() {
    return (
      <Link href="/week-2"> Go to week-2 → </Link>
  );
}

export function WeekThreeLink() {
    return (
      <Link href="/week-3">
        Go to week-3 →
      </Link>
  );
}

export function WeekFourLink() {
    return (
      <Link href="/week-4"> Go to week-4 → </Link>
  );
}

export function WeekFiveLink() {
    return (
      <Link href="/week-5"> Go to week-5 → </Link>
  );
}

export function WeekSixLink() {
    return (
      <Link href="/week-6"> Go to week-6 → </Link>
  );
}

export function WeekSevenLink() {
    return (
      <Link href="/week-7"> Go to week-7 → </Link>
  );
}

export function WeekEightLink() {
    return (
      <Link href="/week-8"> Go to week-8 → </Link>
  );
}

export function WeekNineLink() {
    return (
      <Link href="/week-9"> Go to week-9 → </Link>
  );
}

export function WeekTenLink() {
    return (
      <Link href="/week-10"> Go to week-10 → </Link>
  );
}
